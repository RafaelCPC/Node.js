

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
  async function getResults(player) {
    let players;
    try{
       players= await luckyDraw(player);
    }
    catch (error) {
        console.error(error)
    }
    return players;
  }
getResults("Tina")
  .then((val) => console.log(val))
  .catch((error) => console.error(error))

getResults("Jorge")
    .then((val) => console.log(val))
    .catch((error) => console.error(error))

getResults("Julien")
  .then((val) => console.log(val))
  .catch((error) => console.error(error))