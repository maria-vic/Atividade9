let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento"));
let nomeUsuario = prompt("Digite o seu nome");

function usuario(anoNascimento){
    const ano = 2020;
    return ano-anoNascimento;
}

alert(`Olá, seu nome é ${nomeUsuario} e você tem ${usuario(anoNascimento)} anos`);