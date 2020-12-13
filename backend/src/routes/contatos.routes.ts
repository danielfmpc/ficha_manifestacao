import Router from 'express';
import { getRepository } from 'typeorm';
import Contato from '../models/Contato';

const contatosRouter = Router();

contatosRouter.get('/', async (request, response) => {
  const contatoRepository = getRepository(Contato);
  const contato = await contatoRepository.find();
  return response.json(contato);
});

export default contatosRouter;
