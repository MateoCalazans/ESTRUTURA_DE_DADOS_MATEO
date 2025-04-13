import FilaCaminhoneiros from "../../src/LISTA2/Q3L2";

let sistema;

beforeEach(() => {
    sistema = new FilaCaminhoneiros(); // capacidade padrão: 10
});

test("deve adicionar caminhoneiros corretamente", () => {
    sistema.chegada("João");
    sistema.chegada("Maria");

    expect(sistema.listarCaminhoneiros()).toEqual(["João", "Maria"]);
});

test("deve remover caminhoneiro corretamente", () => {
    sistema.chegada("João");
    sistema.chegada("Maria");
    const removido = sistema.saida();

    expect(removido).toBe("João");
    expect(sistema.listarCaminhoneiros()).toEqual(["Maria"]);
});

test("deve lançar erro ao tentar remover de fila vazia", () => {
    expect(() => sistema.saida()).toThrow("Nenhum caminhoneiro na fila.");
});

test("deve verificar corretamente se há caminhoneiros", () => {
    expect(sistema.haCaminhoneiros()).toBe(false);
    sistema.chegada("Carlos");
    expect(sistema.haCaminhoneiros()).toBe(true);
});

test("deve identificar quando o carregamento estiver completo", () => {
    for (let i = 0; i < 10; i++) {
        sistema.chegada(`Caminhoneiro ${i}`);
    }

    expect(sistema.carregamentoCompleto()).toBe(true);
});

test("deve lançar erro ao tentar adicionar mais que o limite", () => {
    for (let i = 0; i < 10; i++) {
        sistema.chegada(`Caminhoneiro ${i}`);
    }

    expect(() => sistema.chegada("Extra")).toThrow("Limite de carregamentos do dia atingido.");
});
