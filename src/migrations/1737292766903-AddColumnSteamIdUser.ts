import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddColumnSteamIdUser1737292766903 implements MigrationInterface {
  name = 'AddColumnSteamIdUser1737292766903'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "steamId" character varying`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "steamId"`)
  }
}
