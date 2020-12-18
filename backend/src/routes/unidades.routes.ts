import Router from 'express';
import { getRepository } from 'typeorm';
import Unidade from '../models/Unidade';
import ServiceCreateUnidades from '../services/ServiceCreateUnidades';

const unidadesRouter = Router();

unidadesRouter.get('/', async (request, response) => {
  const unidadeRepository = getRepository(Unidade);
  const unidade = await unidadeRepository.find();
  return response.json(unidade);
});

unidadesRouter.post('/', async (request, response) => {
  try {
    const { unidade } = request.body;
    const createServiceUnidade = new ServiceCreateUnidades();
    const createUnidade = await createServiceUnidade.execute({ unidade });
    return response.json(createUnidade);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default unidadesRouter;
