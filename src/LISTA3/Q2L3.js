class FilaComLista {
    constructor() {
      this.inicio = null;
      this.fim = null;
      this.tamanho = 0;
    }
  
    // Adiciona um elemento no final da fila
    enqueue(dado) {
      const novoNo = new No(dado);
      if (this.isEmpty()) {
        this.inicio = novoNo;
        this.fim = novoNo;
      } else {
        this.fim.proximo = novoNo;
        this.fim = novoNo;
      }
      this.tamanho++;
    }
  
    // Remove um elemento do início da fila
    dequeue() {
      if (this.isEmpty()) return null;
      const dadoRemovido = this.inicio.dado;
      this.inicio = this.inicio.proximo;
      this.tamanho--;
      if (this.isEmpty()) {
        this.fim = null; // Se a fila ficar vazia, o fim também deve ser null
      }
      return dadoRemovido;
    }
  
    // Retorna o elemento na frente da fila sem removê-lo
    front() {
      if (this.isEmpty()) return null;
      return this.inicio.dado;
    }
  
    // Verifica se a fila está vazia
    isEmpty() {
      return this.tamanho === 0;
    }
  
    // Retorna o tamanho da fila
    size() {
      return this.tamanho;
    }
  
    // Exibe os elementos da fila
    exibir() {
      let atual = this.inicio;
      const dados = [];
      while (atual) {
        dados.push(atual.dado);
        atual = atual.proximo;
      }
      console.log(dados.join(' -> '));
    }
  }
  
  class No {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }
  
  export default FilaComLista;
  