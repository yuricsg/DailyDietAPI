import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { db } from '../database'

export async function usersRoutes(app: FastifyInstance){
    
    app.post('/', async (request,reply) => {

        const createUserBodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
        })

        const { name, email } = createUserBodySchema.parse(request.body)

        let sessionId = request.cookies.sessionId

        if (!sessionId) {
            sessionId = randomUUID()
            reply.setCookie('sessionId', sessionId, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7, 
      })
    }

        await db('users').insert({
            id: randomUUID(),
            name,
            email,
            session_id: sessionId,
        })

        return reply.status(201).send()

    })

    

    app.get('/', async ()=>{
    const users = await db('users').select('*')

    return users

    })
}