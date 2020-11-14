let saldo = parseInt(prompt("Insira aqui o seu saldo inicial"));
let compra = parseInt(prompt("Insira aqui o valor da sua compra"));

alert(`Sua compra ocorreu corretamente. Seu saldo atual é de R$ ${saldoAtual(saldo, compra)}.`)

function saldoAtual(saldo, compra){
    if(saldo >= compra){
        return saldo - compra;
    }
    if(saldo < compra){
        alert('Saldo Insuficiente.');
    }
}

