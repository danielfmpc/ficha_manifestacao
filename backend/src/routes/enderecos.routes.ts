import Router from 'express';
import { getRepository } from 'typeorm';
import Endereco from '../models/Endereco';

const enderecosRouter = Router();

enderecosRouter.get('/', async (request, response) => {
  const enderecoRepository = getRepository(Endereco);
  const endereco = await enderecoRepository.find();
  return response.json(endereco);
});

export default enderecosRouter;
