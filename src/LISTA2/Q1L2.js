import Fila from "./Fila"


class PilhaComDuasFilas {
    constructor() {
        this.fila1 = new Fila(5);
        this.fila2 = new Fila(5);
    }

    push(elemento) {
        // Insere o novo elemento na fila2
        this.fila2.enqueue(elemento);

        // Move todos os elementos da fila1 para a fila2
        while (!this.fila1.isEmpty()) {
            this.fila2.enqueue(this.fila1.dequeue());
        }

        // Troca as filas
        const temp = this.fila1;
        this.fila1 = this.fila2;
        this.fila2 = temp;
    }

    pop() {
        if (this.fila1.isEmpty()) throw new Error("Pilha vazia");
        return this.fila1.dequeue();
    }

    top() {
        if (this.fila1.isEmpty()) throw new Error("Pilha vazia");
        return this.fila1.front();
    }

    isEmpty() {
        return this.fila1.isEmpty();
    }

    size() {
        return this.fila1.length();
    }
}

export default PilhaComDuasFilas;