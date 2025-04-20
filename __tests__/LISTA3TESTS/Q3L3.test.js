import ListaSimples from "../../src/LISTA3/Q3L3";

describe('ListaSimples', () => {
    let lista;
  
    beforeEach(() => {
      lista = new ListaSimples();
    });
  
    test('deve iniciar a lista vazia', () => {
      expect(lista.isEmpty()).toBe(true);
      expect(lista.size()).toBe(0);
    });
  
    test('deve adicionar elementos à lista', () => {
      lista.add(10);
      lista.add(20);
      lista.add(30);
      expect(lista.size()).toBe(3);
      expect(lista.isEmpty()).toBe(false);
    });
  
    test('deve remover um elemento da lista', () => {
      lista.add(10);
      lista.add(20);
      lista.add(30);
      lista.remove(20);
      expect(lista.size()).toBe(2);
      expect(lista.search(20)).toBeNull();
    });
  
    test('deve buscar um elemento na lista', () => {
      lista.add(10);
      lista.add(20);
      const node = lista.search(20);
      expect(node.dado).toBe(20);
    });
  
    test('deve exibir os elementos da lista', () => {
      lista.add(10);
      lista.add(20);
      lista.add(30);
      console.log = jest.fn(); // Mocking console.log
      lista.exibir();
      expect(console.log).toHaveBeenCalledWith('10 -> 20 -> 30');
    });
  
    test('deve verificar se a lista está vazia corretamente', () => {
      expect(lista.isEmpty()).toBe(true);
      lista.add(10);
      expect(lista.isEmpty()).toBe(false);
    });
  });