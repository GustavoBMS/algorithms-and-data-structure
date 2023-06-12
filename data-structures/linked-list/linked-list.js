// Definindo a classe para o nó da linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Definindo a classe para a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adiciona um novo nó no final da linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // Se a linked list está vazia, o novo nó se torna a cabeça e a cauda
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Caso contrário, o novo nó é adicionado após a cauda existente
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Imprime os valores da linked list
  print() {
    let currentNode = this.head;
    const values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}

// Criando uma nova linked list
const linkedList = new LinkedList();

// Adicionando valores na linked list
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

// Imprimindo os valores da linked list
linkedList.print();