import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateFichas1607877850636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fichas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'celular',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cep',
            type: 'varchar(9)',
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
            name: 'comentario',
            type: 'mediumtext',
          },
          {
            name: 'sigilo',
            type: 'boolean',
          },
          {
            name: 'unidade_id',
            type: 'varchar',
          },
          {
            name: 'orgao_id',
            type: 'varchar',
          },
          {
            name: 'tipo_id',
            type: 'varchar',
          },
          {
            name: 'contato_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'endereco_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'midia_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'preferencia_id',
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
    await queryRunner.createForeignKey(
      'fichas',
      new TableForeignKey({
        name: 'FK_FICHAS_UNIDADES',
        columnNames: ['unidade_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'unidades',
      }),
    );
    await queryRunner.createForeignKey(
      'fichas',
      new TableForeignKey({
        name: 'FK_FICHAS_ORGAOS',
        columnNames: ['orgao_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orgaos',
      }),
    );
    await queryRunner.createForeignKey(
      'fichas',
      new TableForeignKey({
        name: 'FK_FICHAS_TIPOS',
        columnNames: ['tipo_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tipos',
      }),
    );
    await queryRunner.createForeignKey(
      'fichas',
      new TableForeignKey({
        name: 'FK_FICHAS_MIDIAS',
        columnNames: ['midia_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'midias',
      }),
    );
    await queryRunner.createForeignKey(
      'fichas',
      new TableForeignKey({
        name: 'FK_FICHAS_PREFERENCIAS',
        columnNames: ['preferencia_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'preferencias',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_TIPOS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_ORGAOS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_PREFERENCIAS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_TIPOS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_MIDIAS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_UNIDADES');
    await queryRunner.dropTable('fichas');
  }
}
