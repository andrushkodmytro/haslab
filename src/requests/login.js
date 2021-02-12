import service from './services';
import { API_URL } from 'config';

export const loginApi = (data) => {
  console.log('request login')
  return service.post(`${API_URL}/auth/login`, data);
};

// export const getAccountDataApi = () => {
//   return service.get(`${API_URL}/accounts`);
// };
