import { playerBase } from "./UserFiles/playerBase";
import { playerType } from "./UserFiles/playerType";
import playerResolvers from "./Utils/resolvers";
import { PlayerAI_enum } from "./UserFiles/playerAI_enum";

function generateAI(type: playerType, difficulty: PlayerAI_enum): playerBase {
    const userName = `${difficulty} AI`;
    return playerResolvers.generatePlayer(type, userName);
    
  }