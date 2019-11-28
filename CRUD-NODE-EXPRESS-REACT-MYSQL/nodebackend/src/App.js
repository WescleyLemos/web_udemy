//importando express
const express = require('express');
const app = express();


//Setando porta
app.set('port', process.env.POST || 3000)


//Middlewares
app.use(express.json());

//Importando rota
const employeeRouters = require('./routes/EmployeeRoute')
// Rota 
app.use('/employee', employeeRouters)


app.use('/test', (req, res) => {
    res.send("Teste route")
})

app.use('/', (req, res) => {
    res.send("Hello word")
})



app.listen(app.get('port'), () => {
    console.log("Starting serve node.js")
})
