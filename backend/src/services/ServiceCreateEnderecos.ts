import { getRepository, Repository } from 'typeorm';
import Endereco from '../models/Endereco';

interface Request {
  cep: string;
  endereco: string;
  uf: string;
  cidade: string;
  bairro: string;
  numero: number;
  complemento: string;
}

class ServiceCreateEnderecos extends Repository<Endereco> {
  public async execute({
    bairro,
    cep,
    cidade,
    complemento,
    endereco,
    numero,
    uf,
  }: Request): Promise<Endereco> {
    const enderecoRepository = getRepository(Endereco);
    const createEndereco = await enderecoRepository.create({
      bairro,
      cep,
      cidade,
      complemento,
      endereco,
      numero,
      uf,
    });
    await enderecoRepository.save(createEndereco);
    return createEndereco;
  }
}

export default ServiceCreateEnderecos;
