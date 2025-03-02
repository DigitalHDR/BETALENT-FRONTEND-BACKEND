# Teste Técnico Front-end BeTalent

Projeto feito com React 19 e CSS.
![Animação](https://github.com/user-attachments/assets/3fccb410-ac0d-40ab-85d8-1a6f3ff7b368)

## Iniciando o Projeto

1.  Tenha instaladas em sua máquina as ferramentas [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (ou outro gerenciador de pacotes de sua preferência)

2.  Instalar json-server GLOBALMENTE em seu Computador para evitar problemas de inicialização.
    no PowerShell ou Prompt de Comando digite: `npm install -g json-server`

3.  Clonar esse repositório.

4.  Entre na pasta `teste-pratico-frontend\my-app` do projeto clonado no GitHub
    abra o terminal e execute: `npm start`
    Ira ser executado o "json-server" e o projeto "Teste Técnico BeTalent" ao mesmo tempo.
    "json-server" ira rodar na PORTA 3000 e "Teste Técnico BeTalent" na PORTA 3001.

## Alguns detalhes

1. O projeto ira abrir o navegador automaticamente e o projeto será exibido no navegador com o nome `Teste Técnico BeTalent`

2. Na aba do navegador o ícone usado é o mesmo da `BeTalent`

3. No README do github da `BeTalent` estava dizendo `Datas e telefones devem ser formatadas no front-end e não na API.`,
   "NÃO" falava nada se alterar as imagens dos funcionários pela API então alterei por lá mesmo.

4. Essas fotos como estavam em uma qualidade muito grande renderizei ela e postei em um site e peguei a `URL` de cada
   foto e coloquei na `API` fornecida, como sua dimensão agora são `100 x 150` seu carregamento é ultra rápido,
   fazendo a página carregar com as fotos dos usuários em instantaneamente.

### Meus desafios nesse projeto

É a segunda vez que uso tabelas em um projeto, porem essa é a primeira vez que tenho que editá-la tão profundamente.
Meu desafio foi fazer o "accordion" no modo MOBILE, usando todas as tags que envolvem o <table>, pois nunca tinha visto alguém fazer,
sem contar que também nunca tinha visto alguém usando tabelas em projetos, quando terminei o "accordion" no modo Desktop,
percebi que após ativar o ícone de seta, ele ficava ativo em modo Desktop, tentei usar display: none,
porem dava outro efeito indesejado, pesquisei na internet e como se trata de uma tabela o ideal seria usar "display: table-row"
quando em modo MOBILE, na qual nunca tinha usado esse CSS, foi então que finalizei o projeto,
pois com isso em modo Desktop o "accordion" não estava aparecendo mais.

### Meu Portfólio

[DigitalHDR](https://digitalhdr.com.br/)
