import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('unidades')
class Unidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  unidade: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Unidade;
