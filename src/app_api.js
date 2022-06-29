import express from "express";
import chalk from "chalk";
import { tarefa } from "./controllers/tarefa_controllers.js";
import { usuario } from "./controllers/usuario_controllers.js";
import { Tarefa } from "./models/tarefa_model.js";
import { Usuario } from "./models/usuario_model.js";
import { bd } from "./infra/sqlite-db.js";

const app = express();
app.use(express.json());

tarefa(app, bd);
usuario(app, bd);

app.listen(3333, () => {
console.log(chalk.magenta('Funcionando!'));
});