class ListaEncadeada {
    constructor() {
      this.inicio = null;
      this.tamanho = 0;
    }
  
    isEmpty() {
      return this.tamanho === 0;
    }
  
    length() {
      return this.tamanho;
    }
  
    add(dado) {
      const novoNo = new No(dado);
      novoNo.proximo = this.inicio;
      this.inicio = novoNo;
      this.tamanho++;
    }
  
    append(dado) {
      const novoNo = new No(dado);
      if (this.isEmpty()) {
        this.inicio = novoNo;
      } else {
        let atual = this.inicio;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novoNo;
      }
      this.tamanho++;
    }
  
    addAt(dado, posicao) {
      if (posicao < 0 || posicao > this.tamanho) return;
  
      if (posicao === 0) {
        this.add(dado);
      } else {
        const novoNo = new No(dado);
        let atual = this.inicio;
        let anterior = null;
        let indice = 0;
  
        while (indice < posicao) {
          anterior = atual;
          atual = atual.proximo;
          indice++;
        }
  
        novoNo.proximo = atual;
        anterior.proximo = novoNo;
        this.tamanho++;
      }
    }
  
    removeFirst() {
      if (this.isEmpty()) return;
      this.inicio = this.inicio.proximo;
      this.tamanho--;
    }
  
    removeLast() {
      if (this.isEmpty()) return;
  
      if (this.tamanho === 1) {
        this.inicio = null;
      } else {
        let atual = this.inicio;
        let anterior = null;
  
        while (atual.proximo) {
          anterior = atual;
          atual = atual.proximo;
        }
  
        anterior.proximo = null;
      }
  
      this.tamanho--;
    }
  
    removeAt(posicao) {
      if (posicao < 0 || posicao >= this.tamanho) return;
  
      if (posicao === 0) {
        this.removeFirst();
      } else {
        let atual = this.inicio;
        let anterior = null;
        let indice = 0;
  
        while (indice < posicao) {
          anterior = atual;
          atual = atual.proximo;
          indice++;
        }
  
        anterior.proximo = atual.proximo;
        this.tamanho--;
      }
    }
  
    search(dado) {
      let atual = this.inicio;
      while (atual) {
        if (atual.dado === dado) return atual;
        atual = atual.proximo;
      }
      return null;
    }
  
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
  
  export default ListaEncadeada;
  