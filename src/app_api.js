import express from 'express';
const app = express();

import {tarefa} from './controllers/tarefa_controllers.js'
tarefa(app);

import {usuario} from './controllers/usuario_controllers.js'
usuario(app);

app.listen(3333, () => console.log('Esta funcionando!!!'));

