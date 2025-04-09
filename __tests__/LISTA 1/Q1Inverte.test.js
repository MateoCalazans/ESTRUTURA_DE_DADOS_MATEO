import inverte from "../../src/LISTA1/Q1Inverte";


  test("Se eu colocar uma palavra e chamar o método inverte, a palavra deve sair invertida", () =>{
    expect(inverte("ABACAXI")).toBe("IXACABA");
});