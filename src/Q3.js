import Pilha from "./Pilha";

function trocaTopoBase (pilha){
    let aux = new Pilha(pilha.size);

    if (pilha.isEmpty() || pilha.length() === 1) return;

    while(!pilha.isEmpty()){
        aux.push(pilha.pop());
    }

    return aux;

    
};
export default trocaTopoBase;