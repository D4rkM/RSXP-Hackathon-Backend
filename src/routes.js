import { Router } from 'express';

//@todo - implementar Watson
//import WatsonController from './app/controllers/WatsonController';
import MessageController from './app/controllers/MessageController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/message', MessageController.store);

export default routes;