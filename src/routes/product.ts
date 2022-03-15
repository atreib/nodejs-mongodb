import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeCreateProductService, makeGetProductsService } from '../services/product/factory';

export default (router: Router): void => {
  const prefix = 'product';
  router.post(`/${prefix}`, adaptRoute(makeCreateProductService()));
  router.get(`/${prefix}`, adaptRoute(makeGetProductsService()));
};
