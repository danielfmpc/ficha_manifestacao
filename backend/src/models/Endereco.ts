import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('enderecos')
class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  uf: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Endereco;
