import removerDuplicatas from "../../src/LISTA1/Q7";

test("Remove duplicatas mantendo a mais próxima do topo", () => {
    const entrada = [3, 7, 3, 2, 7, 1, 4, 2];
    const esperado = [3, 7, 1, 4, 2]; 
  
    const resultado = removerDuplicatas(entrada);
    expect(resultado).toEqual(esperado);
  });