import Pilha from "../src/Pilha";
import trocaTopoBase from "../src/Q3.JS";

let pilha;

beforeEach(() => {
    pilha = new Pilha(5); 
});

test("Se a pilha estiver vazia, ela deve permanecer vazia", () => {
    trocaTopoBase(pilha);
    expect(pilha.isEmpty()).toBe(true);
});

test("Se a pilha tiver apenas um elemento, ela deve permanecer a mesma", () => {
    pilha.push("X");
    trocaTopoBase(pilha);
    expect(pilha.pop()).toBe("X"); 
});

test("Se a pilha tiver múltiplos elementos, o topo e a base devem trocar de lugar", () => {
    pilha.push("A");
    pilha.push("B");
    pilha.push("C");
    pilha.push("D"); 

    let aux = trocaTopoBase(pilha);
    expect(aux.pop()).toBe("A"); 
    expect(aux.dados[0]).toBe("D"); 
});