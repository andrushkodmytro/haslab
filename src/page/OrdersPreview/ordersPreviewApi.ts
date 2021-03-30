import service from 'requests/services';
import { API_URL } from 'config';

export const getOrdersApi = () => {
  return service.get(`${API_URL}/orders`);
};
