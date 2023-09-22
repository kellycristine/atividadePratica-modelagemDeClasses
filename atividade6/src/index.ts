/*6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.
Exemplo:
meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()*/

class Carro {
    consumoDeCombustivel: number;
    quantidadeDeCombustivel: number;
  
    constructor(consumo: number) {
      this.consumoDeCombustivel = consumo;
      this.quantidadeDeCombustivel = 0;
    }
  
    andar(distancia: number) {
      const distanciaPercorrida = distancia / this.consumoDeCombustivel;
      return this.quantidadeDeCombustivel -= distanciaPercorrida;
    }
  
    obterGasolina() {
      return this.quantidadeDeCombustivel;
    }
  
    adicionarGasolina(quantidadeGasolina: number) {
      return this.quantidadeDeCombustivel += quantidadeGasolina;
    }
  }
  
  const apocalypse = new Carro(17);
  console.log(apocalypse.adicionarGasolina(84));
  console.log(apocalypse.andar(126));
  console.log(apocalypse.obterGasolina());