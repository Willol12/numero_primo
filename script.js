//Criar funçãopara mostrar os numeros primos

//Primos
//Compostos

//Exemplo: 10, 11
//10 é divisivel por 1, 2, 5 e ele mesmo(10)
//11 é divisivel por 1 e ele mesmo(11)
exibirNumerosPrimos(10);
function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <=limite; numero++) {
    
    if (NumeroPrimo(numero))console.log(numero);
  }

}
function NumeroPrimo(numero) {
    for(let divisor =2; divisor < numero; divisor++) {
    if(numero % divisor === 0) {
      return false;
    }
    }
    return true;
  }