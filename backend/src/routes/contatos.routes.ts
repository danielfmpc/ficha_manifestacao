import Router from 'express';
import { getRepository } from 'typeorm';
import Contato from '../models/Contato';
import ServiceCreateContatos from '../services/ServiceCreateContatos';

const contatosRouter = Router();

contatosRouter.get('/', async (request, response) => {
  const contatoRepository = getRepository(Contato);
  const contato = await contatoRepository.find();
  return response.json(contato);
});

contatosRouter.post('/', async (request, response) => {
  const { email, telefone, celular } = request.body;
  const createContato = new ServiceCreateContatos();
  const contato = await createContato.execute({
    celular,
    telefone,
    email,
  });
  response.json(contato);
});

export default contatosRouter;
