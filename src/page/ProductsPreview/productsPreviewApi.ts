import service from 'requests/services';
import { API_URL } from 'config';

export const getAllProductsApi = (data: any) => {
  return service.get(`${API_URL}/products`, data);
};
