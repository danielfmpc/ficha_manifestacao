import Router from 'express';
import { getRepository } from 'typeorm';
import Preferencia from '../models/Prefrencia';
import ServiceCreatePreferencias from '../services/ServiceCreatePreferencias';

const preferenciasRouter = Router();

preferenciasRouter.get('/', async (request, response) => {
  const preferenciaRepository = getRepository(Preferencia);
  const preferencia = await preferenciaRepository.find();
  return response.json(preferencia);
});

preferenciasRouter.post('/', async (request, response) => {
  try {
    const { preferencia } = request.body;
    const createServicePreferencia = new ServiceCreatePreferencias();
    const createPreferencia = await createServicePreferencia.execute({
      preferencia,
    });
    return response.json(createPreferencia);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default preferenciasRouter;
