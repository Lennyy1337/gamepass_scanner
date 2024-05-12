import { fastifyYupSchema } from "fastify-yup-schema";

import { fastify } from "./init/fastify";
import { router } from "./router";
import { pino } from "./init/pino";
import { gamepassClass } from "./tools/gamepass";

fastify.register(fastifyYupSchema);

fastify.register(router);

async function hell() {
  const timenow = Date.now()
  console.log(await gamepassClass.getAllGamespasses(1447425205));
  const endtime = Date.now() - timenow
  console.log(endtime)
}

//hell()

fastify.listen({ port: 3001, host: "0.0.0.0" }, function (err, address) {
  pino.info("Listening on " + address);
  if (err) {
    console.log(err);
    fastify.log.error(err);
  }
});
