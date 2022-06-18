export const tarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('Rota post de tarefa ativada: tarefa adicionada ao banco de dados')
    })
};
