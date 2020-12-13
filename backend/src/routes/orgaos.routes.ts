import Router from 'express';
import { getRepository } from 'typeorm';
import Orgao from '../models/Orgao';

const orgaosRouter = Router();

orgaosRouter.get('/', async (request, response) => {
  const orgaoRepository = getRepository(Orgao);
  const orgao = await orgaoRepository.find();
  return response.json(orgao);
});

export default orgaosRouter;
