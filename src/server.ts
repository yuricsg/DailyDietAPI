import fastify from 'fastify'
import { db } from './database.js'

const app = fastify()

app.get('/run', async ()=> {
    const tables = await db('sqlite_schema').select('*')

    return tables
})

app.listen({
    port:3333,
}).then(() => {
    console.log('Server rodando...')
}) 