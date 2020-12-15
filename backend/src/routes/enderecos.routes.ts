import Router from 'express';
import { getRepository } from 'typeorm';
import Endereco from '../models/Endereco';
import ServiceCreateEnderecos from '../services/ServiceCreateEnderecos';

const enderecosRouter = Router();

enderecosRouter.get('/', async (request, response) => {
  const enderecoRepository = getRepository(Endereco);
  const endereco = await enderecoRepository.find();
  return response.json(endereco);
});

enderecosRouter.post('/', async (request, response) => {
  try {
    const {
      cep,
      endereco,
      uf,
      cidade,
      bairro,
      numero,
      complemento,
    } = request.body;

    const createServiceEnderecos = new ServiceCreateEnderecos();

    const createEndereco = await createServiceEnderecos.execute({
      cep,
      endereco,
      uf,
      cidade,
      bairro,
      numero,
      complemento,
    });

    return response.json(createEndereco);
  } catch (err) {
    return response.status(401).json(err.message);
  }
});

export default enderecosRouter;
