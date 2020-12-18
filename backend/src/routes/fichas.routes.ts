import Router from 'express';
import { getRepository } from 'typeorm';
import Ficha from '../models/Ficha';
import ServiceCreateFichas from '../services/ServiceCreateFichas';

const fichasRouter = Router();

fichasRouter.get('/', async (request, response) => {
  const fichaRepository = getRepository(Ficha);
  const ficha = await fichaRepository.find();
  return response.json(ficha);
});

fichasRouter.post('/', async (request, response) => {
  try {
    const {
      celular,
      cep,
      complemento,
      nome,
      numero,
      telefone,
      email,
      comentario,
      sigilo,
      midia_id,
      orgao_id,
      tipo_id,
      unidade_id,
    } = request.body;
    const createServiceFichas = new ServiceCreateFichas();
    const createEndereco = await createServiceFichas.execute({
      celular,
      cep,
      complemento,
      nome,
      numero,
      telefone,
      email,
      comentario,
      sigilo,
      unidade_id,
      midia_id,
      orgao_id,
      tipo_id,
    });

    return response.json(createEndereco);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default fichasRouter;
