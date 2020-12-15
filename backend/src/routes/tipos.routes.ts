import Router from 'express';
import { getRepository } from 'typeorm';
import Tipo from '../models/Tipo';
import ServiceCreateTipos from '../services/ServiceCreateTipos';

const tiposRouter = Router();

tiposRouter.get('/', async (request, response) => {
  const tipoRepository = getRepository(Tipo);
  const tipo = await tipoRepository.find();
  return response.json(tipo);
});

tiposRouter.post('/', async (request, response) => {
  try {
    const { tipo } = request.body;
    const createServiceTipo = new ServiceCreateTipos();
    const createTipo = await createServiceTipo.execute({ tipo });
    return response.json(createTipo);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default tiposRouter;
