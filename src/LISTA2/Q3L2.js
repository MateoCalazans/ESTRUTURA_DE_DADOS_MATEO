import Fila from "./Fila.js";

class FilaCaminhoneiros {
    constructor(capacidade = 10) {
        this.fila = new Fila(capacidade);
        this.capacidade = capacidade;
    }

    chegada(caminhoneiro) {
        if (this.fila.isFull()) {
            throw new Error("Limite de carregamentos do dia atingido.");
        }
        this.fila.enqueue(caminhoneiro);
    }

    saida() {
        if (this.fila.isEmpty()) {
            throw new Error("Nenhum caminhoneiro na fila.");
        }
        return this.fila.dequeue();
    }

    haCaminhoneiros() {
        return !this.fila.isEmpty();
    }

    carregamentoCompleto() {
        return this.fila.isFull();
    }

    listarCaminhoneiros() {
        let lista = [];
        let qtd = this.fila.length();
        let idx = this.fila.inicio;

        for (let i = 0; i < qtd; i++) {
            lista.push(this.fila.dados[idx]);
            idx = (idx + 1) % (this.capacidade + 1);
        }

        return lista;
    }
}

export default FilaCaminhoneiros;
