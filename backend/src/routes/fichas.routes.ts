import Router from 'express';
import { getRepository } from 'typeorm';
import Ficha from '../models/Ficha';

const fichasRouter = Router();

fichasRouter.get('/', async (request, response) => {
  const fichaRepository = getRepository(Ficha);
  const ficha = await fichaRepository.find();
  return response.json(ficha);
});

export default fichasRouter;
