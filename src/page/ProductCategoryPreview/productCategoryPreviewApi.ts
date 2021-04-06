import service from 'requests/services';
import { API_URL } from 'config';

export const getProductCategoriesApi = (data: any) => {
  return service.get(`${API_URL}/categories`, data);
};
