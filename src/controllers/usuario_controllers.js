export const usuario = (app) => {
    app.get('/usuario', (req, res) => {
        res.send('Rota post de usuario ativada: tarefa adicionada ao banco de dados')
    })
};