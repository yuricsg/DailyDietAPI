import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('meals', (table) => {
        table.uuid('id').primary()
        table.uuid('user_id').references('users.id')
        table.string('nome_da_refeicao').notNullable()
        table.string('descricao').notNullable()
        table.boolean('esta_em_dieta').notNullable()
        table.date('data').notNullable()
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('meals')
}

