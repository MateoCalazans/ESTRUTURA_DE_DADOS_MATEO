import ListaEncadeada from "../../src/LISTA3/ListaEncadeada";
import embaralharLista from "../../src/LISTA3/Q5L3";


test('Deve embaralhar a lista encadeada', () => {
    const lista = new ListaEncadeada();
    lista.append(1);
    lista.append(2);
    lista.append(3);
    lista.append(4);
    lista.append(5);
  
    // Salva a ordem original
    const original = [];
    let atual = lista.inicio;
    while (atual) {
      original.push(atual.dado);
      atual = atual.proximo;
    }
  
    embaralharLista(lista);
  
    // Após embaralhar
    const embaralhada = [];
    atual = lista.inicio;
    while (atual) {
      embaralhada.push(atual.dado);
      atual = atual.proximo;
    }
  
    expect(embaralhada).not.toEqual(original);
  });
