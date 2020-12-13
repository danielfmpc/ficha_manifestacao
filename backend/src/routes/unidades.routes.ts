import Router from 'express';
import { getRepository } from 'typeorm';
import Unidade from '../models/Unidade';

const unidadesRouter = Router();

unidadesRouter.get('/', async (request, response) => {
  const unidadeRepository = getRepository(Unidade);
  const unidade = await unidadeRepository.find();
  return response.json(unidade);
});

export default unidadesRouter;
