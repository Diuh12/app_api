import express from 'express';
const app = express();

app.get('/tarefa', (req, res) =>{
    res.send('Rota ativada com Get e recurso tarefa: valores de tarefa devem ser retornados')
})

app.listen(3333, () => console.log('Esta funcionando!!!'));