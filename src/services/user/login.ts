import { UserModel } from '../../schemas/User';
import { IRequest, IResponse, IService } from '../../protocols/http-service';

class UserLoginService implements IService {
  async handle(req: IRequest): Promise<IResponse> {
    const { login, password } = req.body;
    const user = await UserModel.login(login, password);
    return { status: 200, body: user };
  }
}

export { UserLoginService };
