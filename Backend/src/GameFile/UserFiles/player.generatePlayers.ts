import { playerBase } from "./playerBase";
import {playerType } from "./playerType";

export function generatePlayer(type: playerType, userName: string): playerBase {
  let maxStrength = 100;
  const health = 100;
  const strength = {
    might: Math.floor(Math.random() * 10) + 1,
    intelligence: Math.floor(Math.random() * 10) + 1,
    magic: Math.floor(Math.random() * 10) + 1,
    charisma: Math.floor(Math.random() * 10) + 1,
    luck: Math.floor(Math.random() * 10) + 1,
    badDogAttitude: Math.floor(Math.random() * 10) + 1,
  };
  const likeness = Math.random() > 0.5; // Random boolean value
  const totalStrength = strength.might + strength.intelligence + strength.magic + strength.charisma + strength.luck + strength.badDogAttitude;

  if (totalStrength > maxStrength) {
    strength.might = Math.min(strength.might, maxStrength - (totalStrength - maxStrength));
    strength.intelligence = Math.min(strength.intelligence, maxStrength - (totalStrength - maxStrength));
    strength.magic = Math.min(strength.magic, maxStrength - (totalStrength - maxStrength));
    strength.charisma = Math.min(strength.charisma, maxStrength - (totalStrength - maxStrength));
    strength.luck = Math.min(strength.luck, maxStrength - (totalStrength - maxStrength));
    strength.badDogAttitude = Math.min(strength.badDogAttitude, maxStrength - (totalStrength - maxStrength));
  }

  return { type, userName, health, strength, likeness };
}
