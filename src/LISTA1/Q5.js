import Pilha from "../Pilha";  

function verificaBemFormado(texto) {
    let pilha = new Pilha(texto.length);

    for (let char of texto) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.isEmpty()) return false; 

            let topo = pilha.pop();
            if ((char === ')' && topo !== '(') || (char === ']' && topo !== '[')) {
                return false; 
            }
        }
    }

    return pilha.isEmpty(); 
}

export default verificaBemFormado;