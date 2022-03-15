import { Request, Response } from 'express';
import { IRequest, IService } from '../protocols/http-service';

const adaptRoute = (service: IService) => {
  return async (req: Request, res: Response) => {
    const { body } = req;
    const httpRequest: IRequest = { body };
    const { status, body: response } = await service.handle(httpRequest);
    res.status(status).send(response);
  };
};

export { adaptRoute };
