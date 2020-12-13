import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orgaos')
class Orgaos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orgao: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Orgaos;
