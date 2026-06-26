// Variável Global mutável
var conteudo = "nulo"; // String (Texto)

// Função sem retorno
function somar () { // Inicio do bloco de código
    // Variável local: só funciona dentro da função porque é let (do tipo número inteiro)
    let num1 = 10; 
    // Variável local do tipo número (INT)
    let num2 = 20;

    console.log(num1 + num2);
} // Fim do bloco

// Função com retorno
function somar_com_retorno(){
  // Varíavel local do tipo número (INT)
  let num1 = 10;
  // Varíavel local do tipo número (INT)
  let num2 = 20;
  return num1 + num2; // Retorna um varlor de dentro do bloco da função de volta para o código.
} // Fim do bloco

const conteudo_const = "nulo";

console.log(conteudo);
console.log(conteudo_const);
