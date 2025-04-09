import Pilha from "../Pilha";  

function removerDuplicatas(pilhaOriginal) {
  const vistos = new Set();
  const pilhaSemDuplicatas = new Pilha(pilhaOriginal.length());
  const pilhaTemporaria = new Pilha(pilhaOriginal.length());


  while (!pilhaOriginal.isEmpty()) {
    const elemento = pilhaOriginal.pop();

    if (!vistos.has(elemento)) {
      vistos.add(elemento);
      pilhaSemDuplicatas.push(elemento);
    }
  }


  while (!pilhaSemDuplicatas.isEmpty()) {
    pilhaTemporaria.push(pilhaSemDuplicatas.pop());
  }


  const resultado = [];
  while (!pilhaTemporaria.isEmpty()) {
    resultado.push(pilhaTemporaria.pop());
  }

  return resultado;
}

export default removerDuplicatas;
