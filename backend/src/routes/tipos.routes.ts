import Router from 'express';
import { getRepository } from 'typeorm';
import Tipo from '../models/Tipo';

const tiposRouter = Router();

tiposRouter.get('/', async (request, response) => {
  const tipoRepository = getRepository(Tipo);
  const tipo = await tipoRepository.find();
  return response.json(tipo);
});

export default tiposRouter;
