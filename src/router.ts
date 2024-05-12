import { fastify } from "./init/fastify";
import { getGamePassesHandler } from "./routes/getgamepasses";
import { gamepassschema } from "./schemas/getgamepassesschema";

export async function router(){
    fastify.route({
        method: "POST",
        url: "/api/gamepasses/get",
        schema: gamepassschema,
        handler: getGamePassesHandler
    })
}