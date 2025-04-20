import ListaEncadeada from './ListaEncadeada';

class ListaEncadeadaInvertida extends ListaEncadeada {
  // Função para inverter a lista
  inverter() {
    let anterior = null;
    let atual = this.inicio;
    let proximo = null;

    while (atual) {
      proximo = atual.proximo;  // Armazena o próximo nó
      atual.proximo = anterior; // Inverte a referência do nó atual
      anterior = atual;        // Avança o ponteiro anterior
      atual = proximo;         // Avança para o próximo nó
    }

    this.inicio = anterior;  // O último nó será o novo primeiro nó
  }
}
export default ListaEncadeadaInvertida;