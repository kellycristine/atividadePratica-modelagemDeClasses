/*3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.*/

class ContaCorrente {
    private numero: string;
    public nome: string;
    public saldo: number;
  
    constructor(numero: string, nome: string, saldoInicial?: number) {
      this.numero = numero;
      this.nome = nome;
      this.saldo = saldoInicial || 0;
    }
  
    alterarNome(nome: string) {
      this.nome = nome;
    }
  
    deposito(valor: number) {
      this.saldo += valor;
    }
  
    saque(valor: number) {
      if (valor > this.saldo) {
        return "Saldo insuficiente";
      }
  
      return this.saldo -= valor;
    }
  }
  
  const contaKelly = new ContaCorrente("123456", "Kelly");
  console.log(contaKelly.saldo);
  contaKelly.deposito(100);
  console.log(contaKelly.saldo);
  console.log (contaKelly.saque(500));
  console.log(contaKelly.saldo);
  contaKelly.alterarNome("Tanara");
  console.log(contaKelly.nome);