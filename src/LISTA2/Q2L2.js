import Pilha from "../Pilha";  

class FilaComDuasPilhas {
    constructor() {
        this.pilha1 = new Pilha(5); 
        this.pilha2 = new Pilha(5);
    }

    
    moverPilha1ParaPilha2() {
        while (!this.pilha1.isEmpty()) {
            this.pilha2.push(this.pilha1.pop());
        }
    }

    
    enqueue(elemento) {
        this.pilha1.push(elemento); 
    }


    dequeue() {
        if (this.pilha2.isEmpty()) {
            if (this.pilha1.isEmpty()) {
                throw new Error("Fila vazia");
            }
            this.moverPilha1ParaPilha2(); 
        }
        return this.pilha2.pop();
    }

   
    front() {
        if (this.pilha2.isEmpty()) {
            if (this.pilha1.isEmpty()) {
                throw new Error("Fila vazia");
            }
            this.moverPilha1ParaPilha2();
        }
        return this.pilha2.top();
    }

    
    isEmpty() {
        return this.pilha1.isEmpty() && this.pilha2.isEmpty();
    }

   
    size() {
        return this.pilha1.length() + this.pilha2.length();
    }
}

export default FilaComDuasPilhas;