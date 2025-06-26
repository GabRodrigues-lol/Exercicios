// 1. Definindo a estrutura No com valor e filhos
class No {
    constructor(valor) {
      this.valor = valor;
      this.filhos = [];
    }
  
    adicionarFilho(filho) {
      this.filhos.push(filho);
    }
  }
  
  // 2. Função para contar todas as unidades na rede
  function contarUnidades(raiz) {
    if (!raiz) return 0;
    let total = 1; // conta a raiz
    for (const filho of raiz.filhos) {
      total += contarUnidades(filho);
    }
    return total;
  }
  
  // 3. Função para imprimir a rede hierarquicamente com indentação
  function imprimirRede(raiz, nivel = 0) {
    console.log('  '.repeat(nivel) + raiz.valor);
    for (const filho of raiz.filhos) {
      imprimirRede(filho, nivel + 1);
    }
  }
  
  // 4. Exemplo de uso
  const matriz = new No("Matriz Central");
  const frq1 = new No("Franquia Zona Sul");
  const frq2 = new No("Franquia Zona Norte");
  const sub1 = new No("Unidade Independente A");
  const sub2 = new No("Unidade Independente B");
  
  matriz.adicionarFilho(frq1);
  matriz.adicionarFilho(frq2);
  frq1.adicionarFilho(sub1);
  frq2.adicionarFilho(sub2);
  
  console.log("Total de unidades:", contarUnidades(matriz)); // Deve imprimir 5
  console.log("Hierarquia da rede:");
  imprimirRede(matriz);
  