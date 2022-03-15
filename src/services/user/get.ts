import { UserModel } from '../../schemas/User';
import { IResponse, IService } from '../../protocols/http-service';

class GetUsersService implements IService {
  async handle(): Promise<IResponse> {
    const user = await UserModel.find();
    return {
      status: 200,
      body: user,
    };
  }
}

export { GetUsersService };
