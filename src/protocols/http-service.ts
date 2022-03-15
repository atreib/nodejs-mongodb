/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRequest {
  body: any;
}

interface IResponse {
  status: number;
  body: any;
}

interface IService {
  handle(req: IRequest): Promise<IResponse>;
}

export { IRequest, IResponse, IService };
