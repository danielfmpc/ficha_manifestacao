import { getRepository, Repository } from 'typeorm';
import Orgao from '../models/Orgao';

interface Request {
  orgao: string;
}

class ServiceCreateOrgaos extends Repository<Orgao> {
  public async execute({ orgao }: Request): Promise<Orgao> {
    const orgaoRepository = getRepository(Orgao);
    const checkOrgao = await orgaoRepository.findOne({
      where: { orgao },
    });

    if (checkOrgao) {
      throw new Error('Orgão já cadastrado');
    }

    const createOrgao = orgaoRepository.create({ orgao });
    await orgaoRepository.save(createOrgao);
    return createOrgao;
  }
}

export default ServiceCreateOrgaos;
