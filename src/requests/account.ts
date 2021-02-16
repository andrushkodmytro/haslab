import service from './services';
import { API_URL } from 'config';

export const getAccountApi = () => {
  return service.get(`${API_URL}/account`);
};

export const uploadLogoApi = (body: any) => {
  return service.post(`${API_URL}/account/logo`, body);
};
