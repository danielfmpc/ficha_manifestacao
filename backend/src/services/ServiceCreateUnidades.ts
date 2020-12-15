import { getRepository, Repository } from 'typeorm';
import Unidade from '../models/Unidade';

interface Request {
  unidade: string;
}

class ServiceCreateUnidades extends Repository<Unidade> {
  public async execute({ unidade }: Request): Promise<Unidade> {
    const unidadeRepository = getRepository(Unidade);
    const checkUnidade = await unidadeRepository.findOne({
      where: { unidade },
    });

    if (checkUnidade) {
      throw new Error('Unidade já cadastrada');
    }

    const createUnidade = unidadeRepository.create({ unidade });
    await unidadeRepository.save(createUnidade);
    return createUnidade;
  }
}

export default ServiceCreateUnidades;
