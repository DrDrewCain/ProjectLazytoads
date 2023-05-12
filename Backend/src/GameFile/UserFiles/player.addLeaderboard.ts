import { playerBase } from "./playerBase";

    export function addLeaderboard(players: playerBase[]) {
      // Create an array to store the player names and scores.
      const leaderboard = players.map((player) => ({
        name: player.userName,
        score: player.health,
      }));
    
      // Sort the leaderboard by score in descending order.
      leaderboard.sort((a, b) => b.score - a.score);
    
      // Display the leaderboard to the user.
      for (const player of leaderboard) {
        const score = player.score;
        const name = player.name;
        console.log(`${name} - ${score}`);
      }
    }