import Pilha from "./Pilha";


function decimalParaBinario(numero){

    let pilha = new Pilha();
    if (numero === 0) return "0";

    while (numero > 0) {
        let resto = numero % 2;
        pilha.push(resto);
        numero = Math.floor(numero / 2);
    }

    let binario = "";
    while (!pilha.isEmpty()) {
        binario += pilha.pop();
    }

    return binario;
}
export default decimalParaBinario;