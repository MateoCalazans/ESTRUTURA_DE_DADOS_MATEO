import PilhaComLista from "../../src/LISTA3/Q1L3";

describe('Pilha dinâmica com lista encadeada', () => {
  let pilha;

  beforeEach(() => {
    pilha = new PilhaComLista();
  });

  test('Pilha começa vazia', () => {
    expect(pilha.isEmpty()).toBe(true);
    expect(pilha.size()).toBe(0);
  });

  test('push() adiciona elementos no topo', () => {
    pilha.push(5);
    expect(pilha.top()).toBe(5);
    expect(pilha.size()).toBe(1);

    pilha.push(10);
    expect(pilha.top()).toBe(10);
    expect(pilha.size()).toBe(2);
  });

  test('pop() remove e retorna o topo', () => {
    pilha.push(7);
    pilha.push(8);
    expect(pilha.pop()).toBe(8);
    expect(pilha.top()).toBe(7);
    expect(pilha.size()).toBe(1);
  });

  test('pop() em pilha vazia retorna null', () => {
    expect(pilha.pop()).toBe(null);
  });

  test('top() em pilha vazia retorna null', () => {
    expect(pilha.top()).toBe(null);
  });
});
