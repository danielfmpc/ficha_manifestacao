import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fichas')
class Ficha {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  comentario: string;

  @Column()
  sigilo: boolean;

  @Column()
  numero: string;

  @Column()
  unidade_id: string;

  @Column()
  orgao_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ficha;
