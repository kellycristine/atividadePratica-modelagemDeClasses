class RegistroOperacao {
    operacao : string;
    operandos : number[];
    resultado : number;
  
    constructor(operacao : string, operandos : number[], resultado : number) {
      this.operacao = operacao;
      this.operandos = operandos;
      this.resultado = resultado;
    }
  
    imprimeRegistro() {
      console.log(`${this.operacao} [${this.operandos}] = ${this.resultado}`);
    }
  }
  
  class Calculadora {
    historico : RegistroOperacao[] = [];
  
    soma(operandos: number[]) {
      let resultado = operandos.reduce(
        (acumulador, operando) => {return acumulador + operando},
        0
      );
      this.historico.push(new RegistroOperacao("+", operandos, resultado));
      return resultado;
    }
  
    multiplica(operandos: number[]) {
      let resultado = operandos.reduce(
        (acumulador, operando) => {return acumulador * operando},
        1
      );
      this.historico.push(new RegistroOperacao("*", operandos, resultado));
      return resultado;
    }
  
    divide(operandos: number[]) {
      let resultado = operandos.reduce(
        (acumulador, operando) => acumulador / operando
      );
  
      this.historico.push(new RegistroOperacao("/", operandos, resultado));
      return resultado;
    }
  
    diminui(operandos: number[]) {
      let resultado = operandos.reduce(
        (acumulador, operando) => acumulador - operando
      );
  
      this.historico.push(new RegistroOperacao("-", operandos, resultado));
      return resultado;
    }
  
    imprimeHistorico() {
      this.historico.forEach(registro => {
        registro.imprimeRegistro();
      });
    }
  
  }
  
  //executar o exercicio
  export class Exercicio4 {
      constructor() {
        console.log("Exercicio 4");
  
        const calculadora = new Calculadora();
        calculadora.soma([1, 2, 3]);
        calculadora.multiplica([1, 3, 7]);
        calculadora.divide([1, 2]);
        calculadora.diminui([10, 7, 5]);
        
        calculadora.imprimeHistorico();
      }
  }