import fastify from 'fastify'
import cookie from '@fastify/cookie'
import crypto from 'node:crypto'
import { db } from './database.js'
import knex from 'knex'
import { title } from 'node:process'
import { email, uuid } from 'zod'
import { env } from './env/index.js'
import { usersRoutes } from './routes/users.js'
import { mealsRoutes } from './routes/meals.js'

const app = fastify()

app.register(cookie)

app.register(usersRoutes, {
    prefix: 'users',
})

app.register(mealsRoutes, {
    prefix: 'meals',
})

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('Server HTTP rodando...')
}) 