import { playGame } from '../../Backend/src/GameFile/playGame';

import { appDataSource } from '../../Backend/src/GameFile/serverStarter';
appDataSource.initialize().then(() => {
console.log("Data Source has been initialized!");}).catch((err: ErrorCallback) => {
console.error("Error during Data Source initialization", err);});

function main() {
  playGame();
}

main();