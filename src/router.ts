import { fastify } from "./init/fastify";
import { getGamePassesHandler } from "./routes/getgamepasses";

export async function router(){
    fastify.route({
        method: "POST",
        url: "/api/gamepasses/get",
        handler: getGamePassesHandler
    })
}