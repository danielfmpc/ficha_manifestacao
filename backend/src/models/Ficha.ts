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
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  celular: string;

  @Column()
  sigilo: boolean;

  @Column()
  comentario: string;

  @Column()
  cep: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  unidade_id: string;

  @Column()
  orgao_id: string;

  @Column()
  tipo_id: string;

  @Column()
  midia_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ficha;
