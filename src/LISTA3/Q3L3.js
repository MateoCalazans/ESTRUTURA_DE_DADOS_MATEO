class ListaSimples {
    constructor() {
      this.nodes = []; // Array de nós
    }
  
    // Adiciona um novo nó no final da lista
    add(dado) {
      const novoNo = {
        dado: dado,
        proximo: null
      };
      
      if (this.isEmpty()) {
        this.nodes.push(novoNo); // Se a lista estiver vazia, adiciona o primeiro nó
      } else {
        const ultimoNo = this.nodes[this.nodes.length - 1];
        ultimoNo.proximo = this.nodes.length; // O último nó aponta para o novo nó
        this.nodes.push(novoNo); // Adiciona o novo nó no final
      }
    }
  
    // Remove o primeiro nó com o dado especificado
    remove(dado) {
      if (this.isEmpty()) return;
  
      let indice = -1;
      for (let i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].dado === dado) {
          indice = i;
          break;
        }
      }
  
      if (indice !== -1) {
        if (indice === 0) {
          this.nodes.shift(); // Remove o primeiro nó
        } else {
          const anterior = this.nodes[indice - 1];
          const atual = this.nodes[indice];
          anterior.proximo = atual.proximo;
          this.nodes.splice(indice, 1); // Remove o nó do array
        }
      }
    }
  
    // Busca por um nó com o dado especificado
    search(dado) {
      for (let i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].dado === dado) {
          return this.nodes[i]; // Retorna o nó encontrado
        }
      }
      return null; // Se não encontrar, retorna null
    }
  
    // Verifica se a lista está vazia
    isEmpty() {
      return this.nodes.length === 0;
    }
  
    // Retorna o número de elementos na lista
    size() {
      return this.nodes.length;
    }
  
    // Exibe todos os elementos da lista
    exibir() {
      const dados = this.nodes.map(node => node.dado);
      console.log(dados.join(' -> '));
    }
  }
  
  export default ListaSimples;
  