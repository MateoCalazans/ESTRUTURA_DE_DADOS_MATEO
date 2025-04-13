import intercalarFilas from "../../src/LISTA2/Q4L2";
import Fila from "../../src/LISTA2/Fila";

test('intercalar duas filas com mesmo tamanho', () => {
    const f1 = new Fila(5);
    const f2 = new Fila(5);

    f1.enqueue(1);
    f1.enqueue(3);
    f1.enqueue(5);

    f2.enqueue(2);
    f2.enqueue(4);
    f2.enqueue(6);

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.dequeue()).toBe(1);
    expect(resultado.dequeue()).toBe(2);
    expect(resultado.dequeue()).toBe(3);
    expect(resultado.dequeue()).toBe(4);
    expect(resultado.dequeue()).toBe(5);
    expect(resultado.dequeue()).toBe(6);
    expect(resultado.isEmpty()).toBe(true);
});

test('intercalar duas filas com tamanhos diferentes', () => {
    const f1 = new Fila(5);
    const f2 = new Fila(5);

    f1.enqueue(10);
    f1.enqueue(30);

    f2.enqueue(20);
    f2.enqueue(40);
    f2.enqueue(60);

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.dequeue()).toBe(10);
    expect(resultado.dequeue()).toBe(20);
    expect(resultado.dequeue()).toBe(30);
    expect(resultado.dequeue()).toBe(40);
    expect(resultado.dequeue()).toBe(60);
    expect(resultado.isEmpty()).toBe(true);
});

test('intercalar com uma fila vazia', () => {
    const f1 = new Fila(5);
    const f2 = new Fila(5);

    f2.enqueue(100);
    f2.enqueue(200);

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.dequeue()).toBe(100);
    expect(resultado.dequeue()).toBe(200);
    expect(resultado.isEmpty()).toBe(true);
});