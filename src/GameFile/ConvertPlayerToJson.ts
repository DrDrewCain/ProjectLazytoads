import { Player} from "./playGame";
import { generatePlayer } from "./UserFiles/player.generatePlayers";
import { playerBase } from "./UserFiles/playerBase";
import { playerType } from "./UserFiles/playerType";
function savePlayersToFile(players: Array<playerBase>) {
  const json = JSON.stringify(players, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "players.json";
  link.href = url;
  link.click();
}

function main() {
  const player1 = generatePlayer(playerType.PATRICK, "user1");
  const player2 = generatePlayer(playerType.SPONGEBOB, "user2");

  const players = [player1, player2];

  savePlayersToFile(players);
}

main();
