import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('preferencias')
class Preferencia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  preferencia: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Preferencia;
