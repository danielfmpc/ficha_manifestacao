import Router from 'express';
import { getRepository } from 'typeorm';
import Orgao from '../models/Orgao';
import ServiceCreateOrgaos from '../services/ServiceCreateOrgaos';

const orgaosRouter = Router();

orgaosRouter.get('/', async (request, response) => {
  const orgaoRepository = getRepository(Orgao);
  const orgao = await orgaoRepository.find();
  return response.json(orgao);
});

orgaosRouter.post('/', async (request, response) => {
  try {
    const { orgao } = request.body;
    const createServiceOrgao = new ServiceCreateOrgaos();
    const createOrgao = await createServiceOrgao.execute({ orgao });
    return response.json(createOrgao);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default orgaosRouter;
