import { CreateUserService } from './create';
import { GetUsersService } from './get';

export const makeCreateUserService = () => {
  return new CreateUserService();
};

export const makeGetUsersService = () => {
  return new GetUsersService();
};
