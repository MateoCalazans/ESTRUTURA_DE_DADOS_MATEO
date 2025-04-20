import ListaEncadeada from './ListaEncadeada.js';

function ordenarPorNome(listaOriginal) {
  const novaLista = new ListaEncadeada();

  let atual = listaOriginal.inicio;
  while (atual) {
    const pessoa = atual.dado;
    let anterior = null;
    let cursor = novaLista.inicio;

    while (cursor && pessoa.nome.localeCompare(cursor.dado.nome) >= 0) {
      anterior = cursor;
      cursor = cursor.proximo;
    }

    const novoNo = { dado: pessoa, proximo: cursor };

    if (anterior === null) {
      novoNo.proximo = novaLista.inicio;
      novaLista.inicio = novoNo;
    } else {
      anterior.proximo = novoNo;
    }

    novaLista.tamanho++;
    atual = atual.proximo;
  }

  return novaLista;
}

function ordenarPorIdade(listaOriginal) {
  const novaLista = new ListaEncadeada();

  let atual = listaOriginal.inicio;
  while (atual) {
    const pessoa = atual.dado;
    let anterior = null;
    let cursor = novaLista.inicio;

    while (cursor && pessoa.idade >= cursor.dado.idade) {
      anterior = cursor;
      cursor = cursor.proximo;
    }

    const novoNo = { dado: pessoa, proximo: cursor };

    if (anterior === null) {
      novoNo.proximo = novaLista.inicio;
      novaLista.inicio = novoNo;
    } else {
      anterior.proximo = novoNo;
    }

    novaLista.tamanho++;
    atual = atual.proximo;
  }

  return novaLista;
}

export { ordenarPorNome, ordenarPorIdade };
