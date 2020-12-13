import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateFicha1607877850636 implements MigrationInterface {
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
            isNullable: true,
          },
          {
            name: 'orgao_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_ORGAOS');
    await queryRunner.dropForeignKey('fichas', 'FK_FICHAS_UNIDADES');
    await queryRunner.dropTable('fichas');
  }
}
