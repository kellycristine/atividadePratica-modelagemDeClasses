/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor*/

class Bola {
    cor: string;
    circunferencia: number;
    material: string;
  
    constructor(cor: string, circunferencia: number, material: string) {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    }
  
    trocarACor(cor: string) {
      this.cor = cor;
    }
  
    mostrarACor() {
      return console.log(this.cor);
    }
  }
  
  const bola1 = new Bola("azul", 20, "plástico");
  bola1.mostrarACor();
  bola1.trocarACor("vermelho");
  bola1.mostrarACor();