import axios from "axios";
import { robloxGamesResponse } from "../types/robloxGamesResponse";
import noblox, { GamePassData } from "noblox.js";

export class gamepassClass {
  static async getAllGames(robloxId: number): Promise<robloxGamesResponse> {
    const robloxApiUrl = `https://games.roblox.com/v2/users/${robloxId}/games`;
    const response: robloxGamesResponse = (await axios.get(robloxApiUrl)).data;
    return response;
  }

  static async getAllGamespasses(robloxid: number) {
    const games = await this.getAllGames(robloxid);
    let gamepasses: GamePassData[] = [];

    const gamepassPromises = games.data.map(async (game) => {
        const gameGamepasses = await noblox.getGamePasses(game.id);
        gamepasses.push(...gameGamepasses);
    });

    await Promise.all(gamepassPromises);

    return gamepasses;
}
}
