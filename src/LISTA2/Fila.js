class Fila {
    constructor(size = 5) {
        this.dados = [];
        this.size = size;
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(elemento) {
        if (this.isFull()) throw new Error("Queue overflow");
        this.dados[this.fim] = elemento;
        if (this.fim === this.size) {
            this.fim = 0;
        } else {
            this.fim++;
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow");
        const elemento = this.dados[this.inicio];
        if (this.inicio === this.size) {
            this.inicio = 0;
        } else {
            this.inicio++;
        }
        return elemento;
    }

    front() {
        if (!this.isEmpty()) return this.dados[this.inicio];
    }

    length() {
        if (this.isEmpty()) return 0;
        if (this.inicio < this.fim) return this.fim - this.inicio;
        return ((this.size + 1 - this.inicio) + (this.fim - 0));
    }

    isEmpty() {
        return this.inicio === this.fim;
    }

    isFull() {
        return this.length() === this.size;
    }

    toString() {
        if (this.isEmpty()) return 'Fila vazia';
        let resultado = '';
        let i = this.inicio;
        while (i !== this.fim) {
            resultado += this.dados[i] + ' ';
            i = (i + 1) % this.size;
        }
        return resultado.trim();
    }

    clear() {
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
    }
}

export default Fila;