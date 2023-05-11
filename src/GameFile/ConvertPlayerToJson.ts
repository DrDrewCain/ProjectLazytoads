import { Player, PlayerType, generatePlayer} from "./WarriorsWorld";

function savePlayersToFile(players: Array<Player>) {
  const json = JSON.stringify(players, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "players.json";
  link.href = url;
  link.click();
}

function main() {
  const player1 = generatePlayer(PlayerType.Patrick, "Manan");
  const player2 = generatePlayer(PlayerType.Spongebob, "Mark");

  const players = [player1, player2];

  savePlayersToFile(players);
}

main();
