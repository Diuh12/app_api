import { Usuario } from "../models/usuario_model.js";

export const usuario = (app, bd) => {

  app.get("/usuario", (req, res) => {
    bd.all(`SELECT * FROM USUARIOS`, (error, result) => { 
      if (error) res.status(404).json(error)
      else res.status(200).json(result)
      })
    })

    app.get("/usuario/:email", (req, res) => {
      bd.all(`SELECT * FROM USUARIOS WHERE id = ${req.params.id}`, (error, result) => {
        if (error) res.status(404).json(error)
      else res.status(200).json(result)
      })
    });

  app.post("/usuario", (req, res) => {
    const body = req.body;
    const NovoUsuario = new Usuario(body.nome, body.email, body.senha)
    bd.run(
        `INSERT INTO USUARIOS (NOME, EMAIL, SENHA) 
         VALUES (?, ?, ?)`, [NovoUsuario.nome, NovoUsuario.email, NovoUsuario.senha],
      (error) => {
        if (error) res.status(404).json(error)
        else res.status(200).json("Inserido com sucesso")
      })
  })

  app.put('/usuario/:id', (req, res) => {
    const body = req.body
    const id = req.params.id
    const parametros = [body.nome, body.email, body.senha, id]
      bd.run(`UPDATE USUARIOS SET nome = ?, email = ?, senha = ? WHERE id = ?`, parametros,
      (error) => {
        if(error) res.status(404).json(error)
        else res.status(200).json("Alterado com sucesso")
      })
  })

  app.delete('/usuario/:id', (req, res) => {
      const id = req.params.id
      bd.run(`DELETE FROM USUARIOS WHERE id = ${id}`,(error) => {
        if(error) res.status(404).json(error)
        else res.status(200).json("Deletado com sucesso")
      })
  }) 
};