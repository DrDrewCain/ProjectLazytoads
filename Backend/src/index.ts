import { playGame } from '../../warriorsbackend/src/GameFile/playGame';

import { appDataSource } from "../../warriorsbackend/src/GameFile/serverStarter";
appDataSource.initialize().then(() => {
console.log("Data Source has been initialized!");}).catch((err) => {
console.error("Error during Data Source initialization", err);});

function main() {
  playGame();
}

main();