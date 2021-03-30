import service from '../../requests/services';
import { API_URL } from 'config';

export const companyCreateApi = (data: any) => {
  return service.post(`${API_URL}/companies`, data);
};
