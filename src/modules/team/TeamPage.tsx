import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@modules/auth/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { TeamHttpService, TeamMember } from "@api/endpoints/customer-auth.endpoints";
import { InviteMember } from "./InviteMember";

export default function TeamPage() {
  const { customer } = useAuth();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const isAdmin = customer?.role === "admin";

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await TeamHttpService.listMembers();
      setMembers(data);
      setError(null);
    } catch (e: any) {
      setError(e?.message || "Failed to load team members");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    fetchMembers();
  }, [isAdmin, fetchMembers]);

  const filtered = useMemo(() => {
    if (!query) return members;
    const q = query.toLowerCase();
    return members.filter((m) => m.email.toLowerCase().includes(q) || (m.name || "").toLowerCase().includes(q));
  }, [members, query]);

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-semibold">Unauthorized</h1>
        <p className="text-muted-foreground mt-2">You must be an admin to manage your team.</p>
      </div>
    );
  }

  const handleRoleChange = async (member: TeamMember, role: "admin" | "customer") => {
    if (!isAdmin) return;
    if (member.role === role) return;
    try {
      await TeamHttpService.updateRole(member.id, { role });
      setMembers((prev) => prev.map((m) => (m.id === member.id ? { ...m, role } : m)));
      toast.success(`Updated role for ${member.email}`);
    } catch (e: any) {
      toast.error(e?.message || "Failed to update role");
    }
  };

  const handleRemove = async (member: TeamMember) => {
    if (!isAdmin) return;
    if (member.id === customer?.id) {
      toast.error("You cannot remove yourself");
      return;
    }
    const ok = window.confirm(`Remove ${member.email} from your organization?`);
    if (!ok) return;
    try {
      await TeamHttpService.removeMember(member.id);
      setMembers((prev) => prev.filter((m) => m.id !== member.id));
      toast.success(`Removed ${member.email}`);
    } catch (e: any) {
      toast.error(e?.message || "Failed to remove member");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Team</h1>
          <p className="text-muted-foreground">Manage your organization members</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={fetchMembers} disabled={loading}>
            Refresh
          </Button>
          {isAdmin && <InviteMember />}
        </div>
      </div>

      <div className="mb-6 max-w-sm">
        <Label htmlFor="search">Search</Label>
        <Input id="search" placeholder="Search by name or email" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      {loading ? (
        <div>Loading team members...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : filtered.length === 0 ? (
        <div className="text-muted-foreground">No members found.</div>
      ) : (
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">Name</th>
                <th className="text-left p-3 font-medium">Email</th>
                <th className="text-left p-3 font-medium">Role</th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="text-right p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr key={m.id} className="border-t">
                  <td className="p-3">{m.name || "—"}</td>
                  <td className="p-3">{m.email}</td>
                  <td className="p-3">
                    {isAdmin ? (
                      <select
                        className="flex h-9 rounded-md border border-input bg-background px-2 text-sm"
                        value={m.role}
                        onChange={(e) => handleRoleChange(m, e.target.value as "admin" | "customer")}
                        disabled={m.id === customer?.id}
                      >
                        <option value="customer">Team Member</option>
                        <option value="admin">Admin</option>
                      </select>
                    ) : (
                      <span className="inline-flex items-center rounded border px-2 py-1 text-xs">{m.role}</span>
                    )}
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center rounded border px-2 py-1 text-xs">{m.status || "active"}</span>
                  </td>
                  <td className="p-3 text-right">
                    {isAdmin ? (
                      <Button variant="destructive" size="sm" onClick={() => handleRemove(m)} disabled={m.id === customer?.id}>
                        Remove
                      </Button>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
