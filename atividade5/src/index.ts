/*5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.*/

class BombaCombustivel {
    public tipoCombustivel: string;
    public valorLitro: number;
    private quantidadeCombustivel: number;
  
    constructor(
      tipoCombustivel: string,
      valorLitro: number,
      quantidadeCombustivel: number
    ) {
      this.tipoCombustivel = tipoCombustivel;
      this.valorLitro = valorLitro;
      this.quantidadeCombustivel = quantidadeCombustivel;
    }
  
    abastecerPorValor(valor: number) {
      const litros = valor / this.valorLitro;
  
      if (litros <= this.quantidadeCombustivel) {
        this.quantidadeCombustivel - litros;
        return `Abasteceu ${litros} litros de ${this.tipoCombustivel}`;
      } else {
        return 'Quantidade de litros indisponível na bomba';
      }
    }
  
    abastecerPorLitro(litros: number) {
      if (litros <= this.quantidadeCombustivel) {
        this.quantidadeCombustivel - litros;
        const valorTotal = litros * this.valorLitro;
  
        return `Abasteceu ${litros} litros de ${this.tipoCombustivel}, e o valor total é de ${valorTotal}`;
      } else {
        return "Quantidade de litros indisponível na bomba";
      }
    }
  
    alterarValor(novoValor: number) {
      const novoValorDoLitro = (this.valorLitro = novoValor);
      return `O valor do litro do combustivel ${this.tipoCombustivel} é de ${novoValorDoLitro} reais`;
    }
  
    alterarCombustivel(novoCombustivel: string) {
      this.tipoCombustivel = novoCombustivel;
      return `O combustivel disponível é ${this.tipoCombustivel}`;
    }
  
    alterarQuantidadeCombustivel(novaQuantidade: number) {
      this.quantidadeCombustivel = novaQuantidade;
      return `A quantidade de combustivel disponível é ${this.quantidadeCombustivel} litros`;
    }
  }
  
  const bomba = new BombaCombustivel("gasolina", 5, 500);
  console.log(bomba.abastecerPorLitro(100));
  console.log(bomba.abastecerPorValor(200));
  console.log(bomba.alterarValor(6));
  console.log(bomba.alterarCombustivel("alcool"));
  console.log(bomba.alterarQuantidadeCombustivel(600));




