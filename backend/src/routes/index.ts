import Router from 'express';
import contatosRouter from './contatos.routes';

const routes = Router();

routes.use('/contatos', contatosRouter);

export default routes;
