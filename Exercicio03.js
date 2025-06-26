class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    // Inserir um novo valor na ABB
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // Função buscarFaixa(min, max) - usa percurso in-ordem adaptado para eficiência
    buscarFaixa(min, max) {
      const resultado = [];
  
      function inOrder(node) {
        if (!node) return;
  
        // Ignorar subárvore à esquerda se node.value < min
        if (node.value > min) {
          inOrder(node.left);
        }
  
        // Se valor está dentro da faixa, adiciona ao resultado
        if (node.value >= min && node.value <= max) {
          resultado.push(node.value);
        }
  
        // Ignorar subárvore à direita se node.value > max
        if (node.value < max) {
          inOrder(node.right);
        }
      }
  
      inOrder(this.root);
      return resultado;
    }
  }
  
  // Exemplo de uso:
  
  const bst = new BST();
  const produtos = [50, 30, 70, 20, 40, 60, 80];
  
  // Inserir produtos
  produtos.forEach(p => bst.insert(p));
  
  // Buscar faixa
  console.log(bst.buscarFaixa(30, 65)); // Saída: [30, 40, 50, 60]  