import { getRepository, Repository } from 'typeorm';
import Tipo from '../models/Tipo';

interface Request {
  tipo: string;
}

class ServiceCreateTipos extends Repository<Tipo> {
  public async execute({ tipo }: Request): Promise<Tipo> {
    const tipoRepository = getRepository(Tipo);
    const checkTipo = await tipoRepository.findOne({
      where: { tipo },
    });

    if (checkTipo) {
      throw new Error('Tipo já cadastrado');
    }

    const createTipo = tipoRepository.create({ tipo });
    await tipoRepository.save(createTipo);
    return createTipo;
  }
}

export default ServiceCreateTipos;
