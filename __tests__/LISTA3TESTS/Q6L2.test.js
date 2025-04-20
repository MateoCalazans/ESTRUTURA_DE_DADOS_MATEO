import ListaEncadeada from "../../src/LISTA3/ListaEncadeada";
import substring from "../../src/LISTA3/Q6L3";

test('Deve retornar substring da posição 2 até 5', () => {
    const lista = new ListaEncadeada();
    const texto = "programa";
  
    for (let i = 0; i < texto.length; i++) {
      lista.append(texto[i]);
    }
  
    const resultado = substring(lista, 2, 5);
  
    let atual = resultado.inicio;
    let str = "";
    while (atual) {
      str += atual.dado;
      atual = atual.proximo;
    }
  
    expect(str).toBe("ogra");
  });