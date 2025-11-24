import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { quotationAPI } from "@/api/endpoints/quotation-auth.endpoint";
import { Button } from "@/components/ui/button";

interface IQuotationDetail {
  _id: string;
  quotationNumber: string;
  customerName: string;
  customerEmail: string;
  containerSize: string;
  containerType: string;
  status: string;
  validFrom: string;
  validTo: string;
  notes?: string;
}

export default function QuotationDetail() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IQuotationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchQuotation = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await quotationAPI.getById(id);
        setData(res.data?.data || res.data);
      } catch (err: any) {
        setError(err.message || "Failed to load quotation");
      } finally {
        setLoading(false);
      }
    };

    fetchQuotation();
  }, [id]);

  if (!id) {
    return <div className="p-6">Invalid quotation id.</div>;
  }

  if (loading) {
    return <div className="p-6">Loading quotation details...</div>;
  }

  if (error) {
    return (
      <div className="p-6 space-y-4">
        <div className="text-red-600">{error}</div>
        <Button asChild variant="outline">
          <Link to="/quotations">Back to quotations</Link>
        </Button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6 space-y-4">
        <div>Quotation not found.</div>
        <Button asChild variant="outline">
          <Link to="/quotations">Back to quotations</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Quotation {data.quotationNumber}</h1>
        <Button asChild variant="outline">
          <Link to="/quotations">Back to quotations</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Customer Name</div>
          <div className="font-medium">{data.customerName}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Customer Email</div>
          <div className="font-medium">{data.customerEmail}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Container</div>
          <div className="font-medium">
            {data.containerSize}/{data.containerType}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Status</div>
          <div className="font-medium">{data.status}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Valid From</div>
          <div className="font-medium">{data.validFrom}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Valid To</div>
          <div className="font-medium">{data.validTo}</div>
        </div>
      </div>

      {data.notes && (
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Notes</div>
          <div>{data.notes}</div>
        </div>
      )}
    </div>
  );
}
