import { playGame } from './GameFile/playGame';

import { appDataSource } from "./GameFile/serverStarter";
appDataSource.initialize().then(() => {
console.log("Data Source has been initialized!");}).catch((err) => {
console.error("Error during Data Source initialization", err);});

function main() {
  playGame();
}

main();