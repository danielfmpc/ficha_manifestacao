import { getRepository, Repository } from 'typeorm';
import Ficha from '../models/Ficha';

interface Request {
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  sigilo: boolean;
  comentario: string;
  cep: string;
  numero: string;
  complemento: string;
  unidade_id: string;
  orgao_id: string;
  tipo_id: string;
  midia_id: string;
}

class ServiceCreateFichas extends Repository<Ficha> {
  public async execute({
    comentario,
    sigilo,
    unidade_id,
    orgao_id,
    celular,
    cep,
    complemento,
    nome,
    midia_id,
    numero,
    telefone,
    email,
    tipo_id,
  }: Request): Promise<Ficha> {
    const fichaRepository = getRepository(Ficha);
    const createFicha = await fichaRepository.create({
      nome,
      email,
      telefone,
      celular,
      sigilo,
      comentario,
      cep,
      numero,
      complemento,
      unidade_id,
      orgao_id,
      tipo_id,
      midia_id,
    });
    await fichaRepository.save(createFicha);
    return createFicha;
  }
}

export default ServiceCreateFichas;
