import { getRepository, Repository } from 'typeorm';
import Preferencia from '../models/Prefrencia';

interface Request {
  preferencia: string;
}

class ServiceCreatePreferencias extends Repository<Preferencia> {
  public async execute({ preferencia }: Request): Promise<Preferencia> {
    const preferenciaRepository = getRepository(Preferencia);
    const checkOrgao = await preferenciaRepository.findOne({
      where: { preferencia },
    });

    if (checkOrgao) {
      throw new Error('Orgão já cadastrado');
    }

    const createPreferencia = preferenciaRepository.create({ preferencia });
    await preferenciaRepository.save(createPreferencia);
    return createPreferencia;
  }
}

export default ServiceCreatePreferencias;
