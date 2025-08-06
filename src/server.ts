import fastify from 'fastify'
import crypto from 'node:crypto'
import { db } from './database.js'
import knex from 'knex'
import { title } from 'node:process'
import { email, uuid } from 'zod'

const app = fastify()

app.get('/run', async ()=>{
    const users = await db('users').select('*')

    return users

})

// app.get('/run', async ()=> {
//     const meal = await db('meals').insert({
//         id: crypto.randomUUID(),
//         user_id: '1',
//         nome_da_refeicao: 'Almoço',
//         descricao: 'Frango com legumes',
//         esta_em_dieta: true,
//         data: new Date(),
//     })

//     return meal
// })

app.listen({
    port:3333,
}).then(() => {
    console.log('Server rodando...')
}) 