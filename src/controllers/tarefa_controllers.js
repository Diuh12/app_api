export const tarefa = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com Get e recurso tarefa: valores de tarefa devem ser retornados. Rastreamento da aplicação sendo feito com nodemon')
    })

    app.post('/tarefa', (req, res) => {
        res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
    })
};
