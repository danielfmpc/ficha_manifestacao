import { getRepository, Repository } from 'typeorm';
import Contato from '../models/Contato';

interface Request {
  telefone: string;
  email: string;
  celular: string;
}

class ServiceCreateContatos extends Repository<Contato> {
  public async execute({
    celular,
    email,
    telefone,
  }: Request): Promise<Contato> {
    const contatosRepository = getRepository(Contato);
    const contato = contatosRepository.create({
      celular,
      email,
      telefone,
    });

    await contatosRepository.save(contato);

    return contato;
  }
}

export default ServiceCreateContatos;
