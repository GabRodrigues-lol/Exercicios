// Definição de nó da árvore
class No {
    constructor(valor, esquerda = null, direita = null) {
      this.valor = valor;       // operador ou número
      this.esquerda = esquerda; // nó filho esquerdo
      this.direita = direita;   // nó filho direito
    }
  }
  
  // Função para avaliar a expressão recursivamente
  function avaliarExpressao(no) {
    // Se for número (folha), retorna o valor direto
    if (typeof no.valor === 'number') {
      return no.valor;
    }
  
    // Senão, é operador -> avalia recursivamente as subárvores
    const esquerda = avaliarExpressao(no.esquerda);
    const direita = avaliarExpressao(no.direita);
  
    switch (no.valor) {
      case '+':
        return esquerda + direita;
      case '-':
        return esquerda - direita;
      case '*':
        return esquerda * direita;
      case '/':
        return esquerda / direita;
      default:
        throw new Error('Operador desconhecido: ' + no.valor);
    }
  }
  
  // Montagem da árvore para ((8 + 2) - (4 * (6 / 3)))
  const arvore = new No('-',
    new No('+',
      new No(8),
      new No(2)
    ),
    new No('*',
      new No(4),
      new No('/',
        new No(6),
        new No(3)
      )
    )
  );
  
  // Avaliar a expressão
  const resultado = avaliarExpressao(arvore);
  console.log('Resultado:', resultado);  // Deve imprimir: Resultado: 2
  