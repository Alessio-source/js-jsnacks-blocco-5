//jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri
// (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno
// la posizione compresa tra i due numeri

$(document).ready(
  function(){

    function numberArray() {
      var arr = ["Alessio","Marco","Giovanni","Alberto","Simona","Valerio","Lorenzo"];
      var min = 2;
      var max = 5;
      var arr2 = [];

      for (var i = 0; i < arr.length; i++) {
        if (i >= min && i <= max) {
          var numbers = arr[i];
          arr2.push(numbers);
        }
      };

      return arr2;
    }

    var arrayNumbers = numberArray();
    $("#list").text(arrayNumbers);

  }
);
