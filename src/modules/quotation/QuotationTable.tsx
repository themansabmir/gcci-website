import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { quotationAPI } from "@/api/endpoints/quotation-auth.endpoint";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

interface IQuotation {
  _id: string;
  quotationNumber: string;
  customerName: string;
  customerEmail: string;
  containerSize: string;
  containerType: string;
  status: string;
  validFrom: string;
  validTo: string;
}

export default function QuotationTable() {
  const [data, setData] = useState<IQuotation[]>([]);
  const [loading, setLoading] = useState(false);

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [customerName, setCustomerName] = useState("");

  const fetchQuotations = async () => {
    setLoading(true);
    try {
      const res = await quotationAPI.getAll({
        page,
        limit,
        search,
        status,
        customerName,
      });

      setData(res.data.data || res.data.results || []);
      setTotalPages(res.data.totalPages || 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotations();
  }, [page, search, status, customerName]);

  return (
    <div className="p-6 space-y-5">
      <h1 className="text-2xl font-semibold">Quotation List</h1>

      {/* Filter Section */}
      <div className="flex gap-3 flex-wrap">
        <Input placeholder="Search Quotation..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />

        <Select value={status} onValueChange={(value) => setStatus(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="DRAFT">Draft</SelectItem>
            <SelectItem value="SENT">Sent</SelectItem>
            <SelectItem value="ACCEPTED">Accepted</SelectItem>
            <SelectItem value="REJECTED">Rejected</SelectItem>
            <SelectItem value="EXPIRED">Expired</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-48" />
      </div>

      {/* Table Section */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quotation No</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Container</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Valid From</TableHead>
              <TableHead>Valid To</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  Loading…
                </TableCell>
              </TableRow>
            ) : data.length > 0 ? (
              data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <Link to={`/quotations/${item._id}`} className="text-blue-600 hover:underline">
                      {item.quotationNumber}
                    </Link>
                  </TableCell>
                  <TableCell>{item.customerName}</TableCell>
                  <TableCell>{item.customerEmail}</TableCell>
                  <TableCell>
                    {item.containerSize}/{item.containerType}
                  </TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.validFrom}</TableCell>
                  <TableCell>{item.validTo}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No quotations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-3">
        <Button variant="outline" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </Button>

        <span>
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </span>

        <Button variant="outline" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
