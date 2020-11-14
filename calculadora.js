let x = parseInt(prompt("Digite aqui o valor de x :"));
let sinal = prompt("Digite o sinal da operação a ser efetuada : +  -  *  /");
let y = parseInt(prompt("Digite aqui o valor de y :"));


switch (sinal){
    case '+':
        prompt("Resultado:",x + y);
        break;
    case '-':
        prompt("Resultado:",x - y);
        break;
    case '*':
        prompt("Resultado:",x * y);
        break;
    case '/':
        prompt("Resultado:",x / y);
        break;
}






