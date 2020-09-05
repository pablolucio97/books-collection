import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.alterTable('books', table => {
        table.string('img')
    })
}


export async function down(knex: Knex) {
    return knex.schema.alterTable('books', table => {
        table.dropColumn('img')
    })
}

