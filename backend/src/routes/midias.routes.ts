import Router from 'express';
import { getRepository } from 'typeorm';
import Midia from '../models/Midia';
import ServiceCreateMidias from '../services/ServiceCreateMidias';

const midiasRouter = Router();

midiasRouter.get('/', async (request, response) => {
  const midiaRepository = getRepository(Midia);
  const midia = await midiaRepository.find();
  return response.json(midia);
});

midiasRouter.post('/', async (request, response) => {
  try {
    const { midia } = request.body;
    const createServiceMidia = new ServiceCreateMidias();
    const createMidia = await createServiceMidia.execute({ midia });
    return response.json(createMidia);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default midiasRouter;
