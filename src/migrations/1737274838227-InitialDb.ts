import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialDb1737274838227 implements MigrationInterface {
  name = 'InitialDb1737274838227'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mob_types" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_2ea1b5ef49589419f683a872577" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "mobs" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "mobTypeId" integer, "userId" integer, CONSTRAINT "PK_c6f767c50f8fa148f4b6c982c2b" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "foods" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_0cc83421325632f61fa27a52b59" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "items" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "themes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_ddbeaab913c18682e5c88155592" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "places" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "seasons" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_cb8ed53b5fe109dcd4a4449ec9d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "biomes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_8d336dcc9ea04699345ebc9bd76" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "characters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "image" character varying, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "voting_options" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "image" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "votingId" integer, CONSTRAINT "PK_ae3abc6770aab288beeb57bff9a" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "votings" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "start_date" date NOT NULL, "end_date" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "themeId" integer, "userId" integer, CONSTRAINT "PK_d44f8534b8c53dd3e68071ad099" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "votes" ("user_id" integer NOT NULL, "voting_id" integer NOT NULL, "voting_option_id" integer NOT NULL, "vote_date_time" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "votingId" integer, "votingOptionId" integer, CONSTRAINT "PK_597d7b082b1161ed38d1ea8655d" PRIMARY KEY ("user_id", "voting_id", "voting_option_id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "mob_types" ADD CONSTRAINT "FK_cdecaeb42579bbce0e63292da46" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "mobs" ADD CONSTRAINT "FK_c8a2d9c020b115963dac1af0a7c" FOREIGN KEY ("mobTypeId") REFERENCES "mob_types"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "mobs" ADD CONSTRAINT "FK_e702ea74282de4b157428c4bc20" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "foods" ADD CONSTRAINT "FK_fce5b374ce92f14b4f650790b54" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "items" ADD CONSTRAINT "FK_40e681891fea5a4b3c5c2546d15" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "themes" ADD CONSTRAINT "FK_d085240c9b35398725b28466336" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "places" ADD CONSTRAINT "FK_41f795cb1cf769256b87e548aa2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "seasons" ADD CONSTRAINT "FK_653ecbea64dabd1769327aba6cf" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "biomes" ADD CONSTRAINT "FK_816eebf552be4d12a21b6bf904a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "characters" ADD CONSTRAINT "FK_7c1bf02092d401b55ecc243ef1f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "voting_options" ADD CONSTRAINT "FK_bb2a6639e39fba3dd4484716d8d" FOREIGN KEY ("votingId") REFERENCES "votings"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "votings" ADD CONSTRAINT "FK_85aec905089047c7908ac6ed103" FOREIGN KEY ("themeId") REFERENCES "themes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "votings" ADD CONSTRAINT "FK_72b327b6167932391de8e2286dc" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "votes" ADD CONSTRAINT "FK_5169384e31d0989699a318f3ca4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "votes" ADD CONSTRAINT "FK_8c67071cc4f07819b59426799c6" FOREIGN KEY ("votingId") REFERENCES "votings"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "votes" ADD CONSTRAINT "FK_df6446ee0e71022acd187fe291e" FOREIGN KEY ("votingOptionId") REFERENCES "voting_options"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "votes" DROP CONSTRAINT "FK_df6446ee0e71022acd187fe291e"`
    )
    await queryRunner.query(
      `ALTER TABLE "votes" DROP CONSTRAINT "FK_8c67071cc4f07819b59426799c6"`
    )
    await queryRunner.query(
      `ALTER TABLE "votes" DROP CONSTRAINT "FK_5169384e31d0989699a318f3ca4"`
    )
    await queryRunner.query(
      `ALTER TABLE "votings" DROP CONSTRAINT "FK_72b327b6167932391de8e2286dc"`
    )
    await queryRunner.query(
      `ALTER TABLE "votings" DROP CONSTRAINT "FK_85aec905089047c7908ac6ed103"`
    )
    await queryRunner.query(
      `ALTER TABLE "voting_options" DROP CONSTRAINT "FK_bb2a6639e39fba3dd4484716d8d"`
    )
    await queryRunner.query(
      `ALTER TABLE "characters" DROP CONSTRAINT "FK_7c1bf02092d401b55ecc243ef1f"`
    )
    await queryRunner.query(
      `ALTER TABLE "biomes" DROP CONSTRAINT "FK_816eebf552be4d12a21b6bf904a"`
    )
    await queryRunner.query(
      `ALTER TABLE "seasons" DROP CONSTRAINT "FK_653ecbea64dabd1769327aba6cf"`
    )
    await queryRunner.query(
      `ALTER TABLE "places" DROP CONSTRAINT "FK_41f795cb1cf769256b87e548aa2"`
    )
    await queryRunner.query(
      `ALTER TABLE "themes" DROP CONSTRAINT "FK_d085240c9b35398725b28466336"`
    )
    await queryRunner.query(
      `ALTER TABLE "items" DROP CONSTRAINT "FK_40e681891fea5a4b3c5c2546d15"`
    )
    await queryRunner.query(
      `ALTER TABLE "foods" DROP CONSTRAINT "FK_fce5b374ce92f14b4f650790b54"`
    )
    await queryRunner.query(
      `ALTER TABLE "mobs" DROP CONSTRAINT "FK_e702ea74282de4b157428c4bc20"`
    )
    await queryRunner.query(
      `ALTER TABLE "mobs" DROP CONSTRAINT "FK_c8a2d9c020b115963dac1af0a7c"`
    )
    await queryRunner.query(
      `ALTER TABLE "mob_types" DROP CONSTRAINT "FK_cdecaeb42579bbce0e63292da46"`
    )
    await queryRunner.query(`DROP TABLE "votes"`)
    await queryRunner.query(`DROP TABLE "votings"`)
    await queryRunner.query(`DROP TABLE "voting_options"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "characters"`)
    await queryRunner.query(`DROP TABLE "biomes"`)
    await queryRunner.query(`DROP TABLE "seasons"`)
    await queryRunner.query(`DROP TABLE "places"`)
    await queryRunner.query(`DROP TABLE "themes"`)
    await queryRunner.query(`DROP TABLE "items"`)
    await queryRunner.query(`DROP TABLE "foods"`)
    await queryRunner.query(`DROP TABLE "mobs"`)
    await queryRunner.query(`DROP TABLE "mob_types"`)
  }
}
