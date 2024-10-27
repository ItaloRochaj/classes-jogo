// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo.toLowerCase() === 'mago') {
            ataque = 'magia';
        } else if (this.tipo.toLowerCase() === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo.toLowerCase() === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo.toLowerCase() === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }
        return `O ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Função para lidar com o envio do formulário
document.getElementById('heroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;

    // Criando uma nova instância de Heroi
    const heroi = new Heroi(nome, idade, tipo);

    // Obtendo o resultado do ataque
    const resultado = heroi.atacar();

    // Exibindo o resultado na tela
    document.getElementById('resultado').textContent = resultado;
});
