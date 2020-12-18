import { getRepository, Repository } from 'typeorm';
import Ficha from '../models/Ficha';

interface Request {
  celular: string;
  cep: string;
  complemento: string;
  nome: string;
  midia_id: string;
  numero: string;
  telefone: string;
  email: string;
  comentario: string;
  sigilo: boolean;
  unidade_id: string;
  orgao_id: string;
  tipo_id: string;
}

class ServiceCreateFichas extends Repository<Ficha> {
  public async execute({
    celular,
    cep,
    complemento,
    nome,
    midia_id,
    numero,
    telefone,
    email,
    comentario,
    unidade_id,
    sigilo,
    orgao_id,
    tipo_id,
  }: Request): Promise<Ficha> {
    const fichaRepository = getRepository(Ficha);
    const createFicha = await fichaRepository.create({
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
    await fichaRepository.save(createFicha);
    return createFicha;
  }
}

export default ServiceCreateFichas;
