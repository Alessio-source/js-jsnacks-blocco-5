// Arrow Functions

let prova1 = () => {
  const arr1 = ["Alessio", "Lorenzo"];
  const arr2 = ["Giulio", "Emanuele"];
  return document.getElementById("prova1").innerHTML = arr1 + "," + arr2;
};

prova1();

// Rest parametri

let prova2 = (...numeri) => {

  let numero = 0;

  for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > numero) {
      numero = numeri[i]
    }
  }

  return document.getElementById("prova2").innerHTML = "il numero più grande è:" + numero;
}

prova2(1,10,24,5,39,57);

// Interpolazione stringhe
const nome = "Alberto";
const stringa = "Va al cinema ogni fine settimana con i suoi amici.";

document.getElementById("prova3").innerHTML = `${nome} ${stringa}`;
