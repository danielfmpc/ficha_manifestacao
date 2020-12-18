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
<<<<<<< HEAD
  contato_id: string;

  @Column()
  endereco_id: string;
=======
  midia_id: string;
>>>>>>> 12970724fdad52b52c1358a75a74ffaac81fd6d6

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ficha;
