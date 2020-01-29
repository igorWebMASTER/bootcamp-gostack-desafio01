const express = require('express');

const server = express();

server.use(express.json());

const projects = [{id: "1",
title: "Novo projeto",
tasks: ["Nova tarefa"]}];

//Middlewars
function checkProjectExist(req, res, next){ 

    const {id} = req.params;
    const project = projects.findIndex(project => project.id == id);
    
    if(!project){
        return res.status(400).json({error: 'ID does not exists'});
    }

   
    return next();
}
function logRequest(req, res, next){
    next();
   
    console.count('Números de requisições realizadas');
}

server.use(logRequest);

//List all projects 
server.get('/projects', (req, res)=>{

      return res.json(projects);
});

//List Project
server.get('/projects/:id', (req, res) =>{
    const {id} = req.params;
   
    return res.json(projects[id]);
    
});

//Add project
server.post('/projects',  (req, res) => {
     const { id , title } = req.body;

     const project = {
         id, 
         title,
         tasks: []
     };

     projects.push(project);
     
     return res.json(projects);
});

//Edit a project
server.put('/projects/:id', checkProjectExist , (req, res) => {
    const {id} = req.params;
    const {title} = req.body;

    const project = projects.find(project => project.id == id);
    project.title = title;
    
    return res.json(projects);
});

//Delete project
server.delete('/projects/:id', checkProjectExist, (req, res) =>{
    const {id}  = req.params;
    const projectId = projects.findIndex(project => project.id == id);

    projects.splice(projectId,1);

    return res.json(projects);
});

//Add Tasks

server.post('/projects/:id/tasks', (req, res ) => {
    
    const {id} = req.params;
    const {title} = req.body;

    const project = projects.find(project => project.id == id);

    project.tasks.push(title);

    return res.json(project);
});

server.listen(3333);