import inverterFila from "../../src/LISTA2/Q6L2";
import Fila from "../../src/LISTA2/Fila";

test("inverter uma fila com múltiplos elementos", () => {
    const fila = new Fila(5);
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    inverterFila(fila);
    expect(fila.dequeue()).toBe(3);
    expect(fila.dequeue()).toBe(2);
    expect(fila.dequeue()).toBe(1);
    expect(fila.isEmpty()).toBe(true);
});

test("inverter uma fila com um único elemento", () => {
    const fila = new Fila(5);
    fila.enqueue(42);
    inverterFila(fila);
    expect(fila.dequeue()).toBe(42);
    expect(fila.isEmpty()).toBe(true);
});

test("inverter uma fila vazia", () => {
    const fila = new Fila(5);
    inverterFila(fila);
    expect(fila.isEmpty()).toBe(true);
});