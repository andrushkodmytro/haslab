import service from './services';
import { API_URL } from 'config';

export const getAccountApi = () => {
  return service.get(`${API_URL}/account`);
};
