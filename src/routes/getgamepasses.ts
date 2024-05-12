import { FastifyReply, FastifyRequest } from "fastify";
import { pino } from "../init/pino";
import { gamepassClass } from "../tools/gamepass";

type body = {
    robloxid: number
}

export async function getGamePassesHandler(request: FastifyRequest<{Body: body}>, reply: FastifyReply){
    const robloxid = request.body.robloxid

    const games = await gamepassClass.getAllGamespasses(robloxid)

    reply.send({success: true, data: games})
}