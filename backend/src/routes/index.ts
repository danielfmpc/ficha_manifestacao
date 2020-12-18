import Router from 'express';
import fichasRouter from './fichas.routes';
import orgaosRouter from './orgaos.routes';
import tiposRouter from './tipos.routes';
import unidadesRouter from './unidades.routes';

const routes = Router();

routes.use('/tipos', tiposRouter);
routes.use('/orgaos', orgaosRouter);
routes.use('/unidades', unidadesRouter);
routes.use('/fichas', fichasRouter);

export default routes;
