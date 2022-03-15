import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeCreateProductService, makeGetProductsService } from '../services/product/factory';

export default (router: Router): void => {
  router.use('/product', router);
  router.post('/', adaptRoute(makeCreateProductService()));
  router.get('/', adaptRoute(makeGetProductsService()));
};
