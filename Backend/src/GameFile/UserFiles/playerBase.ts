import {playerType} from "./playerType";

export interface playerBase {
    type: playerType;
    userName: string;
    health: number;
    strength: {
      might: number;
      intelligence: number;
      magic: number;
      charisma: number;
      luck: number;
      badDogAttitude: number;
    };
    likeness?: boolean;
  }
  