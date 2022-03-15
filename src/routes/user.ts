import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeCreateUserService, makeGetUsersService } from '../services/user/factory';

export default (router: Router): void => {
  router.use('/user', router);
  router.post('/', adaptRoute(makeCreateUserService()));
  router.get('/', adaptRoute(makeGetUsersService()));
};
