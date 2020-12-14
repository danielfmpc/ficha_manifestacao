import Router from 'express';
import contatosRouter from './contatos.routes';
import enderecosRouter from './enderecos.routes';
import fichasRouter from './fichas.routes';
import orgaosRouter from './orgaos.routes';
import tiposRouter from './tipos.routes';
import unidadesRouter from './unidades.routes';

const routes = Router();

routes.use('/contatos', contatosRouter);
routes.use('/tipos', tiposRouter);
routes.use('/orgaos', orgaosRouter);
routes.use('/unidades', unidadesRouter);
routes.use('/enderecos', enderecosRouter);
routes.use('/fichas', fichasRouter);

export default routes;
