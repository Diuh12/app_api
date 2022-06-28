import { Tarefa } from "../models/tarefa_model.js";

export const tarefa = (app, bd) => {
  app.get("/tarefa", (req, res) => {
    res.send(bd.tarefa)
  });

  app.post("/tarefa", (req, res) => {

    try {
      const body = req.body;
      const NovaTarefa = new Tarefa(
        body.titulo,
        body.descricao,
        body.status,
        body.data_criacao
      );
      bd.tarefa.push(NovaTarefa);
      res.send({ NovaTarefa: NovaTarefa });
    } catch (error) {
      res.json({ message: error.message });
    }
  })
};
