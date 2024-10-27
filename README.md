# Jogo de Herói - Documentação do Projeto

## Descrição

O projeto "Jogo de Herói" é uma aplicação web simples que permite aos usuários criar um personagem heróico e visualizar o tipo de ataque que ele pode realizar com base em suas características. A aplicação é construída utilizando HTML, CSS e JavaScript, e serve como um exemplo de uso de classes e objetos em JavaScript.

## Estrutura do Projeto

A estrutura do projeto é composta por três arquivos principais:

- **index.html**: Contém a estrutura HTML da página.
- **styles.css**: Contém as regras de estilo para a apresentação da aplicação.
- **script.js**: Contém a lógica da aplicação, incluindo a definição da classe `Heroi` e o gerenciamento da interação do usuário.

## Funcionamento

### 1. HTML (index.html)

O arquivo HTML define a interface da aplicação. Ele inclui um formulário onde o usuário pode inserir o nome, idade e tipo de herói. Os tipos disponíveis são:

- Mago
- Guerreiro
- Monge
- Ninja

Ao preencher o formulário e clicar no botão "Criar Herói", os dados inseridos são utilizados para instanciar um objeto da classe `Heroi`.

### 2. CSS (styles.css)

O CSS é responsável pela estilização da página, garantindo que a aplicação seja visualmente agradável e fácil de usar. Inclui estilos para o layout, botões, campos de entrada e a área onde o resultado é exibido.

### 3. JavaScript (script.js)

#### Classe Heroi

A classe `Heroi` possui as seguintes propriedades:

- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo do herói (guerreiro, mago, monge, ninja).

A classe também possui um método chamado `atacar()`, que retorna uma mensagem formatada com o tipo de ataque baseado no tipo de herói:

- **Mago**: "usou magia"
- **Guerreiro**: "usou espada"
- **Monge**: "usou artes marciais"
- **Ninja**: "usou shuriken"

#### Interação do Usuário

Ao submeter o formulário, o JavaScript captura os valores inseridos, cria uma nova instância da classe `Heroi` e exibe a mensagem de ataque no elemento HTML designado para mostrar o resultado.

## Como Executar o Projeto

1. **Crie um diretório para o projeto.**
2. **Dentro desse diretório, crie os seguintes arquivos:**
   - `index.html`
   - `styles.css`
   - `script.js`
3. **Copie o código correspondente para cada arquivo.**
4. **Abra o arquivo `index.html` em um navegador web.**
5. **Preencha o formulário com os dados do herói e clique em "Criar Herói" para ver a mensagem de ataque.**

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização da aplicação.
- **JavaScript**: Lógica do projeto, manipulação de objetos e interação do usuário.

## Conclusão

Este projeto é um exemplo simples de como usar classes e objetos em JavaScript, além de fornecer uma interface amigável para interação do usuário. Ele pode ser expandido com novas funcionalidades, como diferentes tipos de ataques, níveis de experiência e muito mais.

