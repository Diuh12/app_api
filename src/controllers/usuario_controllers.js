import { Usuario } from "../models/usuario_model.js";

export const usuario = (app, bd) => {

  app.get("/usuario", (req, res) => {
    sqlite.all('SELET * FROM USUARIOS', (err, rows) => {
      if(err){
        throw new Error(`Erro ao inserir: ${err}`)
      } else {
        res.send(rows)
      }
    })
  });

  app.post("/usuario", (req, res) => {
    const body = req.body;
    const NovoUsuario = new Usuario(body.nome, body.email, body.senha);
    bd.usuario.push(NovoUsuario);
    res.send({ NovoUsuario: NovoUsuario });
  });

  app.get("/usuario/:email", (req, res) => {
    const param = req.params.email;
    const user = bd.usuario;
    res.send(user.filter((el) => el.email == param)); 
  });

  app.delete('/usuario/:email', (req, res) => {
    const param = req.params.email
    const usuario = bd.usuario
    const email = usuario.filter(el => el.email == param)
    const sucessMsg = {
      "message": `${param} deletado`
    }
    const failMsg = {
      "message": `${param} não encontrado`
    }

    if(email.length > 0){
      usuario.splice(usuario.indexOf(email), 1)
    }
    
    res.send(email.length !== 0 ? sucessMsg : failMsg)
  })

  app.put('/usuario/:nome', (req, res) => {
    const param = req.params.nome;
    const usuario = bd.usuario
    const body = req.body;
    const dadoAntigoIndex = usuario.map(el => el.nome).indexOf(param)
    const dadoAntigo = usuario[dadoAntigoIndex]
    if(dadoAntigoIndex > -1){
      const novoUsuario = new Usuario(
        body.nome || dadoAntigo.nome,
        body.email || dadoAntigo.email,
        body.senha || dadoAntigo.senha
      )
        res.json({
          "Usuario novo": usuario[dadoAntigoIndex],
          "para": novoUsuario
        })
        usuario.splice(dadoAntigoIndex, 1, novoUsuario)
    } else{
      res.send("usuario não encontrado")
    }
  })
};