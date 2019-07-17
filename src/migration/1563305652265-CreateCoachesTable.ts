import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from 'typeorm'

export class CreateCoachesTable1563305652265 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'coaches',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
      ],
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('coaches')
  }

}
