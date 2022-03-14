import { Router } from 'express';

export default (router: Router): void => {
  router.use('/todo', router);
  router.get('/', (req, res) => res.send('Set'));
};
