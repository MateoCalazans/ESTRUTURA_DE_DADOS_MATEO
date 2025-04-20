import ListaEncadeadaInvertida from "../../src/LISTA3/Q4L3";


describe('ListaEncadeadaInvertida', () => {
    let lista;
  
    beforeEach(() => {
      lista = new ListaEncadeadaInvertida();
    });
  
    test('deve inverter a ordem dos elementos', () => {
      lista.add(10);
      lista.add(20);
      lista.add(30);
  
      console.log = jest.fn();  // Mocking console.log
      lista.exibir();  // Exibe: 30 -> 20 -> 10
  
      // Verifica se a exibição foi chamada corretamente
      expect(console.log).toHaveBeenCalledWith('30 -> 20 -> 10');
  
      lista.inverter();
  
      console.log = jest.fn();  // Mocking console.log novamente
      lista.exibir();  // Exibe: 10 -> 20 -> 30
  
      // Verifica se a exibição foi chamada corretamente após a inversão
      expect(console.log).toHaveBeenCalledWith('10 -> 20 -> 30');
    });
  });