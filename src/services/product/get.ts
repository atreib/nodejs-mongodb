import { ProductModel } from '../../schemas/Product';
import { IResponse, IService } from '../../protocols/http-service';

class GetProductsService implements IService {
  async handle(): Promise<IResponse> {
    const Product = await ProductModel.find();
    return {
      status: 200,
      body: Product,
    };
  }
}

export { GetProductsService };
