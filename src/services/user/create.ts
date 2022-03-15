import { UserModel } from '../../schemas/User';
import { IRequest, IResponse, IService } from '../../protocols/http-service';

class CreateUserService implements IService {
  async handle(req: IRequest): Promise<IResponse> {
    const user = await UserModel.create(req.body);
    return {
      status: 200,
      body: user,
    };
  }
}

export { CreateUserService };
