
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
  luckyDraw("Joe")
    .then( 
      ((val) => console.log(val))
    )
    .catch(
      ((error) => console.error(error))
    )
    luckyDraw("Caroline")
    .then( 
      ((val) => console.log(val))
    )
    .catch(
      ((error) => console.error(error))
    )
    luckyDraw("Sabrina")
    .then( 
      ((val) => console.log(val))
    )
    .catch(
      ((error) => console.error(error))
    )

