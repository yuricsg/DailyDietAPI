import { FastifyInstance } from 'fastify'
import { date, z } from 'zod'
import { db } from '../database'
import { randomUUID } from 'node:crypto'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function mealsRoutes(app: FastifyInstance){
    
    app.post(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const createMealBodySchema = z.object({
        nome_da_refeicao: z.string(),
        descricao: z.string(),
        esta_em_dieta: z.boolean(),
        data: z.coerce.date(),
      })

      const { nome_da_refeicao, descricao, esta_em_dieta, data } =
        createMealBodySchema.parse(request.body)

      const sessionId = request.cookies.sessionId

      await db('meals').insert({
        id: randomUUID(),
        name: nome_da_refeicao,         
        description: descricao,         
        is_on_diet: esta_em_dieta,       
        date: data.getTime(),
        user_id: sessionId!, 
      })

      return reply.status(201).send()
    },
  )

  app.put(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const updateMealParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const updateMealBodySchema = z.object({
        nome_da_refeicao: z.string(),
        descricao: z.string(),
        esta_em_dieta: z.boolean(),
        data: z.coerce.date(),
      })

      const { id } = updateMealParamsSchema.parse(request.params)
      const { nome_da_refeicao, descricao, esta_em_dieta, data } =
        updateMealBodySchema.parse(request.body)

      const sessionId = request.cookies.sessionId

      await db('meals')
        .where({ id })
        .update({
        name: nome_da_refeicao,
        description: descricao,
        is_on_diet: esta_em_dieta,
        date: data.getTime(),
        updated_at: new Date().toISOString(),
        })

      return reply.status(204).send()
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getMealParamSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getMealParamSchema.parse(request.params)
      const sessionId = request.cookies.sessionId

      const meal = await db('meals')
        .where({ id })
        .first()

      return { meal }
    },
  )

  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const sessionId = request.cookies.sessionId

      const meals = await db('meals')
        .where('user_id', sessionId)
        .select()

      return { meals }
    },
  )
}