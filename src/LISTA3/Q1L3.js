import ListaEncadeada from './ListaEncadeada';

class PilhaComLista {
    constructor() {
      this.lista = new ListaEncadeada();
    }
    
    push(dado) {
      this.lista.add(dado); // insere no topo da pilha
    }
  
    pop() {
      if (this.isEmpty()) return null;  // Retorna null se a pilha estiver vazia
      const topo = this.lista.inicio.dado;
      this.lista.removeFirst(); // Remove o topo
      return topo; // Retorna o dado removido do topo
    }
  
    top() {
      if (this.isEmpty()) return null; // Retorna null se a pilha estiver vazia
      return this.lista.inicio.dado; // Retorna o topo da pilha
    }
  
    isEmpty() {
      return this.lista.isEmpty(); // Verifica se a pilha está vazia
    }
  
    size() {
      return this.lista.length(); // Retorna o tamanho da pilha
    }
  
    exibir() {
      this.lista.exibir(); // Exibe a lista (pilha)
    }
  }
  
  export default PilhaComLista;
  
