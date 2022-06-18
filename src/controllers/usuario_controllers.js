export const usuario = (app) => {
    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com Get e recurso usuario: valores de usuario devem ser retornados. Rastreamento da aplicação sendo feito com nodemon')
    })

    app.post('/usuario', (req, res) => {
        res.send('Rota POST de usuario ativado: usuario adicionado ao banco de dados')
    })
};