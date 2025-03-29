import PilhaDupla from "../src/Q2.js";

let m;

beforeEach(() =>{
    m = new PilhaDupla(4);
})

test("Se a pilha acabou de ser criada, ela deve estar vazia.",() =>{
    expect(m.isEmptyA()).toBe(true);
    expect(m.isEmptyB()).toBe(true);
})


test("Se eu encher a pilha dos dois lados ela deve estar cheia!", () => {
    m.pushA("a")
    m.pushA("b")
    m.pushB("c")
    m.pushB("d")
    expect(m.isFull()).toBe(true);
})