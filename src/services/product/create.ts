import { ProductModel } from '../../schemas/Product';
import { IRequest, IResponse, IService } from '../../protocols/http-service';

class CreateProductService implements IService {
  async handle(req: IRequest): Promise<IResponse> {
    const Product = await ProductModel.create(req.body);
    return {
      status: 200,
      body: Product,
    };
  }
}

export { CreateProductService };
