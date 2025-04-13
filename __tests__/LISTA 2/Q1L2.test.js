import PilhaComDuasFilas from "../../src/LISTA2/Q1L2";


describe('PilhaComDuasFilas', () => {
    let pilha;

    beforeEach(() => {
        pilha = new PilhaComDuasFilas();  // Reseta a pilha antes de cada teste
    });

    test('Deve empilhar elementos na ordem correta', () => {
        pilha.push(10);
        pilha.push(20);
        pilha.push(30);

        // Como a pilha funciona em LIFO (Last In, First Out), o topo deve ser 30
        expect(pilha.fila1.front()).toBe(30);
        expect(pilha.size()).toBe(3);
    });

    test('Deve remover o elemento do topo com pop()', () => {
        pilha.push(10);
        pilha.push(20);
        pilha.push(30);

        const topo = pilha.pop();  // Deveria retornar 30, o topo

        expect(topo).toBe(30);  // O topo removido foi 30
        expect(pilha.size()).toBe(2);  // A pilha agora tem 2 elementos
    });

    test('Deve retornar o topo da pilha sem remover', () => {
        pilha.push(10);
        pilha.push(20);

        const topo = pilha.top();

        expect(topo).toBe(20);  // O topo deve ser 20 (último valor inserido)
    });

    test('Deve verificar se a pilha está vazia corretamente', () => {
        expect(pilha.isEmpty()).toBe(true);  // A pilha começa vazia

        pilha.push(10);
        expect(pilha.isEmpty()).toBe(false);  // A pilha tem elementos após o push

        pilha.pop();  // Removendo o elemento
        expect(pilha.isEmpty()).toBe(true);  // A pilha deve estar vazia novamente
    });

    test('Deve lançar erro quando tentar dar pop() em uma pilha vazia', () => {
        expect(() => pilha.pop()).toThrowError('Pilha vazia');  // Espera um erro quando tentar fazer pop em pilha vazia
    });

    test('Deve retornar o tamanho correto da pilha', () => {
        expect(pilha.size()).toBe(0);  // A pilha começa vazia

        pilha.push(10);
        pilha.push(20);

        expect(pilha.size()).toBe(2);  // A pilha agora tem 2 elementos

        pilha.pop();  // Removendo o elemento
        expect(pilha.size()).toBe(1);  // A pilha agora tem 1 elemento
    });
});