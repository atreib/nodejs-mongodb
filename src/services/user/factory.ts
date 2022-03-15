import { CreateUserService } from './create';
import { GetUsersService } from './get';
import { UserLoginService } from './login';

export const makeCreateUserService = () => {
  return new CreateUserService();
};

export const makeGetUsersService = () => {
  return new GetUsersService();
};

export const makeUserLoginService = () => {
  return new UserLoginService();
};
