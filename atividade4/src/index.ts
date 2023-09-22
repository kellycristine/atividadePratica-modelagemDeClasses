/*4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c.*/

class Calculadora {
    private operacoes: string[] = [];
  
    somar(a: number, b: number): number {
      const resultado = a + b;
      this.operacoes.push(`Soma de ${a} e ${b} = ${resultado}`);
      return resultado;
    }
  
    multiplicar(a: number, b: number): number {
      const resultado = a * b;
      this.operacoes.push(`Multiplicação de ${a} e ${b} = ${resultado}`);
      return resultado;
    }
  
    dividir(a: number, b: number): number {
      const resultado = a / b;
      this.operacoes.push(`Divisão de ${a} e ${b} = ${resultado}`);
      return resultado;
    }
  
    diminuir(a: number, b: number): number {
      const resultado = a - b;
      this.operacoes.push(`Subtração de ${a} e ${b} = ${resultado}`);
      return resultado;
    }
  
    getOperacoes(): string[] {
      return this.operacoes;
    }
  }

  const Calc = new Calculadora();
 // const somar = Calc.somar(5, 3) opção mais extensa
  //console.log(somar); oção mais extensa
console.log(Calc.somar(5, 4)); //uma opção mais rapida
console.log(Calc.multiplicar(3, 3));
console.log(Calc.dividir(4, 2));
console.log(Calc.diminuir(10, 2));