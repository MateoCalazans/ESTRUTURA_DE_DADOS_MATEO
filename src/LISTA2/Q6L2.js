function inverterFila(fila) {
    if (fila.isEmpty()) return;

    const elemento = fila.dequeue();
    inverterFila(fila);
    fila.enqueue(elemento);
}
export default inverterFila;