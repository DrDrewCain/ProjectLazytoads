import { generatePlayer } from "./UserFiles/player.generatePlayers";
import { addLeaderboard } from "./UserFiles/player.addLeaderboard";
import { Player } from "./UserFiles/player.entity";
import { playerBase } from "./UserFiles/playerBase";
import { playerType } from "./UserFiles/playerType";

/**
 * Here are the instructions on how to play the game:
 * @author Mark
 * YOU MAY NOT COPY THIS GAME WITHOUT EXPLICIT AUTHORIZATION FROM THE AUTHOR.
 * 
 * 1. Enter your userName.
 * 
 * 2. Choose your character. You can either be Warrior or WIZARD. The game will keep prompting you until you enter a valid character.
 * 
 * 3. Answer the question "Is Warrior stronger than WIZARD and his minions?" with either "yes" or "no".
 * 
 * 4. Guess a number between 1 and 100. The computer will generate a random number between 1 and 100.
 * 
 * 5. If your guess is equal to the random number and you answered the question correctly, you win! Otherwise, you lose.
 * 
 * I hope you enjoy the game!
 */

export function playGame() {
  // const Warrior = generatePlayer(playerType.Warrior, "Warrior");
    // const satan = generatePlayer(playerType.WIZARD, "WIZARD");
    // const lucifer = generatePlayer(playerType.Patrick, "Patrick");
    // const other = generatePlayer(playerType.Spongebob, "Spongebob");
  
    let players: playerBase[] = [];
  
    const player1 = prompt("Player 1, choose your character: Warrior, WIZARD, Patrick, or Spongebob")?.toLowerCase() ?? null;
    if (!player1 || (player1 !== playerType.WARRIOR && player1 !== playerType.WIZARD && player1 !== playerType.PATRICK && player1 !== playerType.SPONGEBOB)) {
      alert("Please choose a valid character.");
      return;
    }
    const player1Type = player1 as playerType;
    players.push(generatePlayer(player1Type, "Player 1"));
  
    const player2 = prompt("Player 2, choose your character: Warrior, WIZARD, Patrick, or Spongebob")?.toLowerCase() ?? null;
    if (!player2 || (player2 !== playerType.WARRIOR && player2 !== playerType.WIZARD && player2 !== playerType.PATRICK && player2 !== playerType.SPONGEBOB)) {
      alert("Please choose a valid character.");
      return;
    }
    const player2Type = player2 as playerType;
    players.push(generatePlayer(player2Type, "Player 2"));
  
    let currentPlayerIndex = 0;
    while (true) {
      const currentPlayer = players[currentPlayerIndex];
      const currentOpponent = players[currentPlayerIndex === 0 ? 1 : 0];
  
      const damage = prompt(`${currentPlayer.userName}, choose a number between 1 and 10 to attack ${currentOpponent.userName}:`);
      if (!damage) {
        alert("Please choose a valid number between 1 and 10.");
        continue;
      }
  
      let damageValue = parseInt(damage);
  
      if (isNaN(damageValue) || damageValue < 1 || damageValue > 10) {
        alert("Please choose a valid number between 1 and 10.");
        continue;
      }

      if (currentPlayer.likeness) {
        damageValue += 3;
        alert("Bonus damage added!");
      }
    
  
      currentOpponent.health -= damageValue;
      if (currentOpponent.health <= 0) {
        alert(`${currentPlayer.userName} wins!`);
        const newPlayer = prompt(`${currentOpponent.userName}, please choose a new character: Warrior, WIZARD, Patrick, or Spongebob`)?.toLowerCase() ?? null;
        if (!newPlayer || (newPlayer !== playerType.WARRIOR && newPlayer !== playerType.WIZARD && newPlayer !== playerType.PATRICK && newPlayer !== playerType.SPONGEBOB)) {
            alert("Please choose a valid character.");
            return;
          }
    
          const newPlayerType = newPlayer as playerType;
          const newPlayerCharacter = generatePlayer(newPlayerType, currentOpponent.userName);
          players[currentPlayerIndex === 0 ? 1 : 0] = newPlayerCharacter;
          currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    
          const continueGame = confirm("Do you want to continue playing?");
          if (!continueGame) {
            break;
          }
        }
    
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      }
    
      let maxHealth = 0;
      let winner: playerBase | null = null;
    
      for (const player of players) {
        if (player.health > maxHealth) {
          maxHealth = player.health;
          winner = player;
        }
      }
    
      if (winner) {
        alert(`The winner is ${winner.userName} with ${maxHealth} health remaining!`);
      } else {
        alert("No winner!");
      }
      addLeaderboard(players);
    }

export { Player };

