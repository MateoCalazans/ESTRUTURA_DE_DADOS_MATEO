
function embaralharLista(lista) {
    if (lista.isEmpty() || lista.length() === 1) return;
  
    const dados = [];
    let atual = lista.inicio;
  
    while (atual) {
      dados.push(atual.dado);
      atual = atual.proximo;
    }
  
    // Embaralha o array com algoritmo de Fisher-Yates
    for (let i = dados.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dados[i], dados[j]] = [dados[j], dados[i]];
    }
  
    // Limpa e reinsere embaralhado
    lista.inicio = null;
    lista.tamanho = 0;
  
    for (let i = dados.length - 1; i >= 0; i--) {
      lista.add(dados[i]); // adiciona no início para manter a ordem
    }
  }
  
  export default embaralharLista;