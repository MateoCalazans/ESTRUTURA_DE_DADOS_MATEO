import Pilha from "./Pilha";

function inverte(palavra){
    let pilha = new Pilha(palavra.length);
    for(let char of palavra){
        pilha.push(char);
    }
    let palavraInvertida = "";
    while(!pilha.isEmpty()){
        palavraInvertida+=pilha.pop();
    }
    return palavraInvertida;
}
export default inverte;