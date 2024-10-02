//Guilherme Schmidt Lingnau RA:2210924

//Exercicio 1

function fatorial (n){
    if(n<0){
        return null;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;

    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;

}

//Exercicio 2

function mensagem(m,n){
    return mensagem.repeat(N).trim();
}