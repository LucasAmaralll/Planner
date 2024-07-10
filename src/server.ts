import fastify from "fastify";
import cors from '@fastify/cors'
import { prisma } from "./lib/prisma";
import { createTrip } from "./router/create-trips";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./router/confirm-trip";

const app = fastify()

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register (createTrip)
app.register (confirmTrip)


app.listen ({ port: 3333 }).then(() => {
    console.log ('Server running!')
})