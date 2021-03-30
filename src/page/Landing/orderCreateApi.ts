import service from 'requests/services';
import { API_URL } from 'config';

export const getCreateOrderApi: any = () => {
  return service.get(`${API_URL}/orders/new`);
};
