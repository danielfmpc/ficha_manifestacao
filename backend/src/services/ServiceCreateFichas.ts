import { getRepository, Repository } from 'typeorm';
import Ficha from '../models/Ficha';

interface Request {
<<<<<<< HEAD
=======
  celular: string;
  cep: string;
  complemento: string;
  nome: string;
  midia_id: string;
  numero: string;
  telefone: string;
  email: string;
>>>>>>> 12970724fdad52b52c1358a75a74ffaac81fd6d6
  comentario: string;
  sigilo: boolean;
  unidade_id: string;
  orgao_id: string;
<<<<<<< HEAD
  contato_id: string;
  endereco_id: string;
=======
>>>>>>> 12970724fdad52b52c1358a75a74ffaac81fd6d6
  tipo_id: string;
}

class ServiceCreateFichas extends Repository<Ficha> {
  public async execute({
<<<<<<< HEAD
    comentario,
    sigilo,
    unidade_id,
    orgao_id,
    contato_id,
    endereco_id,
=======
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
>>>>>>> 12970724fdad52b52c1358a75a74ffaac81fd6d6
    tipo_id,
  }: Request): Promise<Ficha> {
    const fichaRepository = getRepository(Ficha);
    const createFicha = await fichaRepository.create({
<<<<<<< HEAD
      comentario,
      sigilo,
      unidade_id,
      orgao_id,
      contato_id,
      endereco_id,
=======
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
>>>>>>> 12970724fdad52b52c1358a75a74ffaac81fd6d6
      tipo_id,
    });
    await fichaRepository.save(createFicha);
    return createFicha;
  }
}

export default ServiceCreateFichas;
