import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fichas')
class Ficha {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  comentario: string;

  @Column()
  sigilo: boolean;

  @Column()
  unidade_id: string;

  @Column()
  orgao_id: string;

  @Column()
  tipo_id: string;

  @Column()
  contato_id: string;

  @Column()
  endereco_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ficha;
