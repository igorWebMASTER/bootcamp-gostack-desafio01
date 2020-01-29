https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67

# bootcamp-gostack-desafio01
Desafio 01 do primeiro módulo do Bootcamp GoStack 🚀
Sobre o desafio
Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

Este projeto conta com:
Node.js - v13.7.0
Yarn - v1.21.1
ExpressJS
Nodemon
Comandos para rodar o projeto:
yarn -i para instalar as dependências. yarn start ou npx nodemon para iniciar o servidor já com o nodemon

<h1>Rotas:</h1>
POST /projects: A rota deve receber title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar o título do projeto no formato string com aspas duplas.

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

GET /projects: Rota que lista todos projetos e suas tarefas;

GET /projects/:id: Rota que lista apenas o projeto com id informado

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id/tasks: A rota deve deletar o primeiro item do campo de tarefas, como uma fila.

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

Exemplo
A rota POST /projects repassando { title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, deve retornar o seguinte array:

[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
