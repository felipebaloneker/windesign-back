import { table } from "console";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1648228066094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'category',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'name',
                        type:'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
    }

}