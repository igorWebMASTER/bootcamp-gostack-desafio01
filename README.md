

# bootcamp-gostack-desafio01
Desafio 01 do primeiro módulo do Bootcamp GoStack 🚀
Sobre o desafio
Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

<h1> Este projeto conta com: </h1>
<ul> 
  <li> Node.js - v13.7.0 </li>
  <li> Yarn - v1.21.1 </li>
  <li> ExpressJS </li>
  <li> Nodemon </li>
  <h1> Comandos para rodar o projeto:</h1>
yarn -i para instalar as dependências. yarn start ou npx nodemon para iniciar o servidor já com o nodemon

<h1>Rotas:</h1>
POST /projects: A rota deve receber title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar o título do projeto no formato string com aspas duplas.

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

GET /projects: Rota que lista todos projetos e suas tarefas;

GET /projects/:id: Rota que lista apenas o projeto com id informado

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id/tasks: A rota deve deletar o primeiro item do campo de tarefas, como uma fila.

DELETE /projects/:id: A rota deve deletar o projeto com o id presente nos parâmetros da rota;
