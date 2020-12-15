import { getRepository, Repository } from 'typeorm';
import Ficha from '../models/Ficha';

interface Request {
  comentario: string;
  sigilo: boolean;
  unidade_id: string;
  orgao_id: string;
  contato_id: string;
  endereco_id: string;
  tipo_id: string;
}

class ServiceCreateFichas extends Repository<Ficha> {
  public async execute({
    comentario,
    sigilo,
    unidade_id,
    orgao_id,
    contato_id,
    endereco_id,
    tipo_id,
  }: Request): Promise<Ficha> {
    const fichaRepository = getRepository(Ficha);
    const createFicha = await fichaRepository.create({
      comentario,
      sigilo,
      unidade_id,
      orgao_id,
      contato_id,
      endereco_id,
      tipo_id,
    });
    await fichaRepository.save(createFicha);
    return createFicha;
  }
}

export default ServiceCreateFichas;
