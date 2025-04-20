import ListaEncadeada from './ListaEncadeada.js';

function josephus(n, d) {
  const lista = new ListaEncadeada();

  for (let i = 1; i <= n; i++) {
    lista.append(i);
  }

  let atual = lista.inicio;

  // Conectando a lista para formar um círculo
  let ultimo = lista.inicio;
  while (ultimo.proximo) {
    ultimo = ultimo.proximo;
  }
  ultimo.proximo = lista.inicio;

  const eliminados = [];
  let anterior = ultimo;

  while (lista.tamanho > 1) {
    for (let i = 0; i < d - 1; i++) {
      anterior = atual;
      atual = atual.proximo;
    }

    eliminados.push(atual.dado);
    anterior.proximo = atual.proximo;
    atual = atual.proximo;
    lista.tamanho--;
  }

  eliminados.push(atual.dado); // último que sobra

  return eliminados;
}

export default josephus;