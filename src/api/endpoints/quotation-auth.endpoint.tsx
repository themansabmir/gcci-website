import { api } from "@api/config";

export interface QuotationQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  customerName?: string;
}

export const quotationAPI = {
  getAll: (params: QuotationQueryParams) => api.get("/quotation", { params }),

  getById: (id: string) => api.get(`/quotation/${id}`),

  create: (data: any) => api.post("/quotation", data),

  update: (id: string, data: any) => api.put(`/quotation/${id}`, data),

  delete: (id: string) => api.delete(`/quotation/${id}`),

  changeStatus: (id: string, status: string) => api.patch(`/quotation/${id}/status`, { status }),

  duplicate: (id: string) => api.post(`/quotation/${id}/duplicate`),

  send: (id: string) => api.post(`/quotation/${id}/send`),
};
