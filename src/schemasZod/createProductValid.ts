import { z } from "zod";

export const createProductValid = z.object({
    name: z.string().min(2),
    price: z.number().min(0.1),
})
