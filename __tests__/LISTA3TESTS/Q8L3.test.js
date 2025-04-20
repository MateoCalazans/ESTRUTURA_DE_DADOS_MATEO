import ListaEncadeada from "../../src/LISTA3/ListaEncadeada";
import { ordenarPorIdade } from "../../src/LISTA3/Q8L3";
import { ordenarPorNome } from "../../src/LISTA3/Q8L3";

test('Ordenar por nome', () => {
    const lista = new ListaEncadeada();
    lista.append({ nome: 'Carlos', idade: 30 });
    lista.append({ nome: 'Ana', idade: 22 });
    lista.append({ nome: 'Bruno', idade: 25 });
  
    const ordenada = ordenarPorNome(lista);
  
    expect(ordenada.inicio.dado.nome).toBe('Ana');
    expect(ordenada.inicio.proximo.dado.nome).toBe('Bruno');
    expect(ordenada.inicio.proximo.proximo.dado.nome).toBe('Carlos');
  });
  
  test('Ordenar por idade', () => {
    const lista = new ListaEncadeada();
    lista.append({ nome: 'Carlos', idade: 30 });
    lista.append({ nome: 'Ana', idade: 22 });
    lista.append({ nome: 'Bruno', idade: 25 });
  
    const ordenada = ordenarPorIdade(lista);
  
    expect(ordenada.inicio.dado.idade).toBe(22);
    expect(ordenada.inicio.proximo.dado.idade).toBe(25);
    expect(ordenada.inicio.proximo.proximo.dado.idade).toBe(30);
  });