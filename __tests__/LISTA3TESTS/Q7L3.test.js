import josephus from "../../src/LISTA3/Q7L3";

test('Josephus com 7 soldados e contagem 3 deve retornar a ordem correta', () => {
    const resultado = josephus(7, 3);
    expect(resultado).toEqual([3, 6, 2, 7, 5, 1, 4]); // último a sobreviver: 4
  });