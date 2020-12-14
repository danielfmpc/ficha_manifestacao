import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEnderecos1607714539735
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'enderecos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'cep',
            type: 'varchar(9)',
            isNullable: true,
          },
          {
            name: 'endereco',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'uf',
            type: 'varchar(2)',
            isNullable: true,
          },
          {
            name: 'cidade',
            type: 'varchar(45)',
            isNullable: true,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'numero',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('enderecos');
  }
}
