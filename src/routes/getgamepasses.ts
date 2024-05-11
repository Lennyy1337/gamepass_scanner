import { FastifyReply, FastifyRequest } from "fastify";
import { pino } from "../init/pino";

type body = {
    robloxid: number
}

export async function getGamePassesHandler(request: FastifyRequest<{Body: body}>, reply: FastifyReply){
}