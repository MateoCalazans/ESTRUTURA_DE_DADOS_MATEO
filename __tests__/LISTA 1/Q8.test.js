import PilhaDePratos from "../../src/LISTA1/Q8";

test("Empilha e desempilha corretamente respeitando a capacidade", () => {
    const pilhas = new PilhaDePratos(3);
  
    pilhas.empilha(5);
    pilhas.empilha(10);
    pilhas.empilha(15);
    pilhas.empilha(20);
  
    expect(pilhas.desempilha()).toBe(20); // Nova pilha
    expect(pilhas.desempilha()).toBe(15); // Volta pra pilha anterior
    expect(pilhas.desempilha()).toBe(10);
    expect(pilhas.desempilha()).toBe(5);
    expect(pilhas.desempilha()).toBe(null); // Nada mais pra desempilhar
  });