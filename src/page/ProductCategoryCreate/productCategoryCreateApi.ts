import service from 'requests/services';
import { API_URL } from 'config';

interface ICategory {
  name: string;
  description?: string;
}

export const getCreateProductCategoryApi: any = (data: ICategory) => {
  return service.post(`${API_URL}/categories`, data);
};
