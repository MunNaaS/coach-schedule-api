import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from 'typeorm'

export class CreateSchedulesTable1563305670561 implements MigrationInterface {

  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'schedules',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'coache_id',
          type: 'int',
        },
        {
          name: 'start_date',
          type: 'timestamp',
        },
        {
          name: 'end_date',
          type: 'timestamp',
        },
      ],
    }), true)

    await queryRunner.createForeignKey('schedules', new TableForeignKey({
      columnNames: ['coache_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'coaches',
      onDelete: 'CASCADE',
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('schedules')
  }

}
