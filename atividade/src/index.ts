/*1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.*/

class Contador {
    item: number;
  
    constructor(valorInicial = 0) {
      this.item = valorInicial;
    }
  
    zerar() {
      this.item = 0;
    }
  
    incermentar() {
      this.item++;
    }
  
    imprimeContador() {
      return console.log(this.item);
    }
  }
  
  const contador = new Contador();
  contador.incermentar();
  contador.incermentar();
  contador.incermentar();
  contador.imprimeContador();
  contador.zerar();
  contador.imprimeContador();