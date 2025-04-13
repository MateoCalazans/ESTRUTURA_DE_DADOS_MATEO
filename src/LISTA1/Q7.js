import Pilha from "../Pilha";

function removerDuplicatas(arrayEntrada) {
  const pilha = new Pilha(arrayEntrada.length);
  const vistos = [];

  // Percorre do topo para a base (fim para o início)
  for (let i = arrayEntrada.length - 1; i >= 0; i--) {
    const elemento = arrayEntrada[i];
    if (!vistos.includes(elemento)) {
      vistos.push(elemento);
      pilha.push(elemento);
    }
  }

  // Agora inverte a pilha pra manter a ordem correta (base até o topo)
  const resultado = [];
  while (!pilha.isEmpty()) {
    resultado.push(pilha.pop());
  }

  return resultado;
}

export default removerDuplicatas;
