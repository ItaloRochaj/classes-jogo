// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome; // Propriedade: nome do herói
        this.idade = idade; // Propriedade: idade do herói
        this.tipo = tipo; // Propriedade: tipo do herói
    }

    // Método para atacar
    atacar() {
        let ataque; // Variável para armazenar o tipo de ataque

        // Estrutura de decisão para definir o ataque conforme o tipo
        if (this.tipo.toLowerCase() === 'mago') {
            ataque = 'magia';
        } else if (this.tipo.toLowerCase() === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo.toLowerCase() === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo.toLowerCase() === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido'; // Ataque padrão para tipos não reconhecidos
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Gandalf', 150, 'mago'); // Criando um objeto do tipo Heroi
heroi1.atacar(); // Chama o método atacar do objeto heroi1

const heroi2 = new Heroi('Aragorn', 30, 'guerreiro'); // Criando outro objeto do tipo Heroi
heroi2.atacar(); // Chama o método atacar do objeto heroi2

// Você pode criar outros heróis e chamar o método atacar para ver diferentes resultados
const heroi3 = new Heroi('Liang', 25, 'ninja');
heroi3.atacar(); // "O ninja atacou usando shuriken."
