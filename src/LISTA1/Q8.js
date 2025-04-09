import Pilha from "../Pilha";  

class PilhaDePratos {
  constructor(capacidade) {
    this.capacidade = capacidade;
    this.pilhas = []; 
  }

  empilha(valor) {
    let ultimaPilha = this.pilhas[this.pilhas.length - 1];

    if (!ultimaPilha || ultimaPilha.isFull()) {
      ultimaPilha = new Pilha(this.capacidade);
      this.pilhas.push(ultimaPilha);
    }

    
    ultimaPilha.push(valor);
  }

  desempilha() {
    while (this.pilhas.length > 0) {
      let ultimaPilha = this.pilhas[this.pilhas.length - 1];

      if (!ultimaPilha.isEmpty()) {
        
        return ultimaPilha.pop();
      } else {
        this.pilhas.pop();
      }
    }

    return null;
  }
}

export default PilhaDePratos;