const { promises } = require("dns");

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const getResults = async (players) => {
  try {
    const winners = await Promise.all(
      players.map((player) => luckyDraw(player))
    );
    winners.forEach((result) => console.log(result));
  } catch (error) {
    console.error(error.message);
  }
};

const players = ["Tina", "Jorge", "Julien"];
getResults(players);
