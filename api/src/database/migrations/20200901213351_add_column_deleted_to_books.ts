import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.alterTable('books', table => {
        table.timestamp('deleted_at')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('books', table => {
        table.dropColumn('deleted_at')
    })
}

