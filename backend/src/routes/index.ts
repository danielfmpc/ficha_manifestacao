import Router from 'express';
import contatosRouter from './contatos.routes';
import orgaosRouter from './orgaos.routes';
import tiposRouter from './tipos.routes';
import unidadesRouter from './unidades.routes';

const routes = Router();

routes.use('/contatos', contatosRouter);
routes.use('/tipos', tiposRouter);
routes.use('/orgaos', orgaosRouter);
routes.use('/unidades', unidadesRouter);

export default routes;
