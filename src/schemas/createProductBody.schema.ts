import { z } from "zod";

export const createProductBodySchema = z.object({
    name: z.string().min(2),
    price: z.number().min(0.01)
})

const schemaMod = createProductBodySchema.partial()
const schemaMod2 = createProductBodySchema.omit({price:true})
const schemaMod3 = createProductBodySchema.pick({price:true})
// Estas são formas de usar o Pick, Omit, Partial na bibliotece ZOD