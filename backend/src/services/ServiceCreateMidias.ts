import { getRepository, Repository } from 'typeorm';
import Midia from '../models/Midia';

interface Request {
  midia: string;
}

class ServiceCreateMidiass extends Repository<Midia> {
  public async execute({ midia }: Request): Promise<Midia> {
    const midiaRepository = getRepository(Midia);

    const createMidia = midiaRepository.create({ midia });
    await midiaRepository.save(createMidia);
    return createMidia;
  }
}

export default ServiceCreateMidiass;
