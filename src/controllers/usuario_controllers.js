import { Usuario } from "../models/usuario_model.js";
import { UsuarioDao } from "../DAO/usuario_dao.js";

export const usuario = (app, bd) => {

    const dadosDao = new UsuarioDao(bd)
  
    app.get("/usuario", (req, res) => {
      const data = async() => {
        try{
          const usuario = await dadosDao.listarUsuario()
          res.status(200).json(usuario)
        }catch(error) {
          res.status(404).json(error)
        }
      }
      data();
    })
  
      app.get("/usuario/:id", (req, res) => {
        const data = async() => {
          try{
            const usuario = await dadosDao.listarUsuarioID(req.params.id)
            res.status(200).json(usuario)
          }catch(error) {
            res.status(404).json(error)
          }
        }
        data();
    });
  
    app.post("/usuario", (req, res) => {
      const body = req.body;
      const novoUsuario = new Usuario(body.nome, body.email, body.senha)
      const data = async() => {
        try{
          const usuario = await dadosDao.addUsuario(novoUsuario)
          res.status(201).json(usuario)
        }catch(error) {
          res.status(404).json(error)
        }
      }
      data();
    })
  
    app.put('/usuario/:id', (req, res) => {
      const body = req.body
      const id = req.params.id
      const parametros = [body.nome, body.email, body.senha, id]
      const data = async() => {
        try{
          const usuario = await dadosDao.alterarUsario(parametros)
          res.status(201).json(usuario)
        }catch(error) {
          res.status(404).json(error)
        }
      }
      data(); 
    })
  
    app.delete('/usuario/:id', (req, res) => { 
        const data = async() => {
          try{
            const usuario = await dadosDao.deletaUsuario(req.params.id)
            res.status(201).json(usuario)
          }catch(error) {
            res.status(404).json(error)
          }
        }
        data();
    }) 
  };