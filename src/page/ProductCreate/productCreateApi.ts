import service from 'requests/services';
import { API_URL } from 'config';

export const createProductApi = (data: any) => {
  return service.post(`${API_URL}/products`, data);
};
