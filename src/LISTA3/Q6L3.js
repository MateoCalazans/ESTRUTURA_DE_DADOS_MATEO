import ListaEncadeada from './ListaEncadeada.js';

function substring(lista, A, B) {
  const novaLista = new ListaEncadeada();

  if (A < 0 || B >= lista.length() || A > B) return novaLista;

  let atual = lista.inicio;
  let indice = 0;

  while (atual) {
    if (indice >= A && indice <= B) {
      novaLista.append(atual.dado);
    }
    atual = atual.proximo;
    indice++;
  }

  return novaLista;
}

export default substring;
