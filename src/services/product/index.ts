import { CreateProductService } from './create';
import { GetProductsService } from './get';

export const makeCreateProductService = () => {
  return new CreateProductService();
};

export const makeGetProductsService = () => {
  return new GetProductsService();
};
