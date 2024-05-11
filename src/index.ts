import { fastifyYupSchema } from 'fastify-yup-schema';

import { fastify } from "./init/fastify";
import { router } from "./router";
import { pino } from "./init/pino";


fastify.register(fastifyYupSchema);

fastify.register(router)

fastify.listen({ port: 3001, host: "0.0.0.0" }, function (err, address) {
  pino.info("Listening on " + address)
  if (err) {
    console.log(err)
    fastify.log.error(err);
  }
});