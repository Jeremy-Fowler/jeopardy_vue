import { AppState } from "../AppState.js";
import { Clue } from "../models/Clue.js";
import { jeopardyApi } from "./AxiosService.js";

class CluesService {
  async getClues() {
    const res = await jeopardyApi.get('api/random')
    console.log(res.data);
    AppState.clues = res.data.map(c => new Clue(c))
  }
}

export const cluesService = new CluesService()