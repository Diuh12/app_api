import express from "express";
import chalk from "chalk";
import { bd } from "./infra/bd.js";
import { Tarefa } from "./models/tarefa_model.js";
import { Usuario } from "./models/usuario_model.js";
import { tarefa } from "./controllers/tarefa_controllers.js";
import { usuario } from "./controllers/usuario_controllers.js";

const app = express();
app.use(express.json());

tarefa(app, bd);
usuario(app, bd);

const tarefa1 = new Tarefa("tarefa1", "api", "em processo", "20/06/2022");
console.log(tarefa1);

const usuario1 = new Usuario("usuario1", "usuario1@gmail.com", "20062022");
console.log(usuario1);

app.listen(3333, () => {
console.log(chalk.magenta('Funcionando!'));
});