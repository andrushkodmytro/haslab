import service from './services';
import { API_URL } from 'config';

export const registrationApi = (data) => {
  return service.post(`${API_URL}/auth/register`, data);
};

// export const getAccountDataApi = () => {
//   return service.get(`${API_URL}/accounts`);
// };
