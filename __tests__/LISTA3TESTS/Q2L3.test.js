import FilaComLista from "../../src/LISTA3/Q2L3";

describe('FilaComLista', () => {
  let fila;

  beforeEach(() => {
    fila = new FilaComLista();
  });

  test('deve iniciar a fila vazia', () => {
    expect(fila.isEmpty()).toBe(true);
    expect(fila.size()).toBe(0);
  });

  test('deve adicionar elementos na fila (enqueue)', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.enqueue(30);
    
    expect(fila.isEmpty()).toBe(false);
    expect(fila.size()).toBe(3);
  });

  test('deve remover o primeiro elemento da fila (dequeue)', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.enqueue(30);
    
    const removido = fila.dequeue();
    
    expect(removido).toBe(10); // O primeiro elemento que foi enfileirado
    expect(fila.size()).toBe(2); // A fila agora deve ter 2 elementos
    expect(fila.front()).toBe(20); // O próximo elemento deve ser o 20
  });

  test('deve retornar null ao tentar remover de uma fila vazia', () => {
    expect(fila.dequeue()).toBeNull();
  });

  test('deve retornar o primeiro elemento sem removê-lo (front)', () => {
    fila.enqueue(10);
    fila.enqueue(20);
    fila.enqueue(30);
    
    expect(fila.front()).toBe(10); // O primeiro elemento na fila
  });

  test('deve verificar se a fila está vazia corretamente', () => {
    expect(fila.isEmpty()).toBe(true);
    
    fila.enqueue(10);
    expect(fila.isEmpty()).toBe(false);
    
    fila.dequeue();
    expect(fila.isEmpty()).toBe(true);
  });
});
