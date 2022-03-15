import { Router } from 'express';
import { adaptRoute } from '../adapters/adapt-route';
import { makeCreateUserService, makeGetUsersService, makeUserLoginService } from '../services/user/factory';

export default (router: Router): Router => {
  const prefix = 'user';
  router.post(`/${prefix}`, adaptRoute(makeCreateUserService()));
  router.get(`/${prefix}`, adaptRoute(makeGetUsersService()));
  router.post(`/${prefix}/login`, adaptRoute(makeUserLoginService()));
  return router;
};
