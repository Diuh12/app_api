export class UsuarioDao {
    constructor(database){
        this.database = database;
    }

    listarUsuario(){
        return new Promise((resolve, reject) => {
            this.database.all(`SELECT * FROM USUARIOS`, (error, result) => { 
                if (error) reject("Erro ao inserir o banco")
                else resolve(result)
                })
        })
    }

    listarUsuarioID(id){
        return new Promise((resolve, reject) => {
            this.database.all(`SELECT * FROM USUARIOS WHERE id = ${id}`, (error, result) => {
                if (error) reject("Erro ao listar usuario")
                else resolve(result)
              })
        })
    }

    addUsuario(produto) {
        return new Promise((resolve, reject) => {
            this.database.run(
                `INSERT INTO USUARIOS (nome, email, senha) 
                 VALUES (?, ?, ?)`, [produto.nome, produto.email, produto.senha],
              (error) => {
                if (error) reject("Erro ao adicionar usuario")
                else resolve("Usuario inserido")
              })
        })
    }

    alterarUsario(parametros) {
        return new Promise((resolve, reject) => {
            this.database.run(`UPDATE USUARIOS 
            SET nome = ?, email = ?, senha = ? WHERE id = ?`, parametros,
      (error) => {
        if(error) reject("Erro ao alterar usuario")
        else resolve("Usuario atualizado")
      })
        })
    }

    deletaUsuario(id){
        return new Promise((resolve, reject) => {
            this.database.run(`DELETE FROM USUARIOS WHERE id = ${id}`, 
                (error) => {
                    if(error) reject("Erro ao deletar usuario")
                    else resolve("Usuario deletado")
              })
        })
    }
}