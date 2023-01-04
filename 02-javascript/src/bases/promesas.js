import heroes from "./data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeById(1));
/*
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const p1 = getHeroeById(1);
    resolve(p1);
    reject("estoy mal");
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log("estoy en el them", heroe);
  })
  .catch((err) => console.log(err));
*/

const getHeroeBuIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("estoy mal");
      }
    }, 2000);
  });
  return promesa;
};

getHeroeBuIdAsync(111).then(console.log).catch(console.warn);
