// comece a criar a sua função add na linha abaixo
function add(a, b) {
    let soma = a + b;
    return soma;
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
    let multiplicador = 0;
    let resultado = 0;
    for (let cont = 1; cont <= a; cont++) {
        mult = add(multiplicador, b);
        resultado = add(mult, resultado);
    }
    return resultado;
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let potenciacao = 0;
    let resultado = x;
    for (let cont = 1; cont < n; cont++) {
        potenciacao = multiply(x, resultado)
        resultado = potenciacao;
    }
    return resultado;
}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');



// comece a criar a sua função factorial na linha abaixo
function factorial(n) {
        let resultado = 1;
        
        for (let cont = 1; cont <= n; cont++) {
            resultado =  multiply(cont, resultado);;
        }
        return resultado;
}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    let soma = 0;

    for (let cont = 1; cont < n; cont++) {
        soma = add(num2, num1);
        num1 = num2;
        num2 = soma;
    }
    return soma;
}
//console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');

