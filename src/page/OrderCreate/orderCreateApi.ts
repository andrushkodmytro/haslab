import service from 'requests/services';
import { API_URL } from 'config';

export const getAccountApi = () => {
  return service.get(`${API_URL}/account`);
};
