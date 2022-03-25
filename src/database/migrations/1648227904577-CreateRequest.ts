import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequest1648227904577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'request',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true
                    },
                    {
                        name:'author_id',
                        type:'uuid'
                    },
                    {
                        name:'details',
                        type:'varchar'
                    },
                    {
                        name:'category',
                        type:'varchar'
                    },
                    {
                        name:'status',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKAuthorIdCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["author_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name:"FKCategoryIdCompliments",
                        referencedTableName:"category",
                        referencedColumnNames:["id"],
                        columnNames:["category"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("request")
    }

}
