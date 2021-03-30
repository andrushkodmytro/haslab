import service from 'requests/services';
import { API_URL } from 'config';

export const getCompanyApi: any = () => {
  return service.get(`${API_URL}/companies`);
};
