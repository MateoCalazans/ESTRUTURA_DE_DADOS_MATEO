import FilaComDuasPilhas from "../../src/LISTA2/Q2L2"

test('deve adicionar elementos e fazer dequeue corretamente', () => {
    const fila = new FilaComDuasPilhas();

    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    // Testa o dequeue, que deve retornar o primeiro elemento da fila
    expect(fila.dequeue()).toBe(1);
    expect(fila.dequeue()).toBe(2);
    expect(fila.dequeue()).toBe(3);
});

test('deve lançar erro ao tentar fazer dequeue em fila vazia', () => {
    const fila = new FilaComDuasPilhas();

    // Testa o dequeue em fila vazia, que deve lançar erro
    expect(() => fila.dequeue()).toThrow("Fila vazia");
});

test('deve retornar o primeiro elemento sem removê-lo com front()', () => {
    const fila = new FilaComDuasPilhas();

    fila.enqueue(1);
    fila.enqueue(2);

    // Testa o front, que não remove o elemento da fila
    expect(fila.front()).toBe(1);

    // Verifica se a fila ainda tem os dois elementos
    expect(fila.dequeue()).toBe(1);
    expect(fila.dequeue()).toBe(2);
});

test('deve verificar se a fila está vazia corretamente', () => {
    const fila = new FilaComDuasPilhas();

    // Testa se a fila está vazia inicialmente
    expect(fila.isEmpty()).toBe(true);

    fila.enqueue(1);

    // Testa se a fila não está vazia após adicionar um elemento
    expect(fila.isEmpty()).toBe(false);
    
    fila.dequeue();

    // Testa se a fila está vazia após remover o elemento
    expect(fila.isEmpty()).toBe(true);
});

test('deve retornar o tamanho correto da fila', () => {
    const fila = new FilaComDuasPilhas();

    // Testa o tamanho da fila após algumas operações
    expect(fila.size()).toBe(0);

    fila.enqueue(1);
    fila.enqueue(2);

    expect(fila.size()).toBe(2);

    fila.dequeue();

    expect(fila.size()).toBe(1);
});

test('deve lançar erro ao tentar acessar o front de uma fila vazia', () => {
    const fila = new FilaComDuasPilhas();

    // Testa o front em fila vazia, que deve lançar erro
    expect(() => fila.front()).toThrow("Fila vazia");
});