let x = parseInt(prompt("Digite aqui um número para ser a sua base"));
let y = parseInt(prompt("Digite aqui outro número para ser o seu expoente"));

function potencia(x, y){
    return Math.pow(x, y);
}

console.log(potencia(x, y));
alert("Abra o console para descobrir o resultado");