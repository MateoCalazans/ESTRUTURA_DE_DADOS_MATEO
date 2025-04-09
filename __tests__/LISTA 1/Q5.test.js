import verificaBemFormado from "../../src/LISTA1/Q5";

test("Verificar sequência bem-formada", () => {
    expect(verificaBemFormado("[ ( ) [ ( ) ] ] ( )")).toBe(true);
});

test("Verificar sequência malformada", () => {
    expect(verificaBemFormado("( ( ) ]")).toBe(false);
});

test("Verificar sequência vazia", () => {
    expect(verificaBemFormado("")).toBe(true);
});

test("Verificar apenas um tipo de parênteses", () => {
    expect(verificaBemFormado("( ( ( ) ) )")).toBe(true);
    expect(verificaBemFormado("[ [ [ ] ] ]")).toBe(true);
});

test("Verificar fechamento errado", () => {
    expect(verificaBemFormado("[ ( ] )")).toBe(false);
});