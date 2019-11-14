const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

app.use(bodyParser.text())
app.use(saudacao('Wescley'))

app.get('/opa',(req, res, next)=>{


    // res.json({
    //     name:'Ipad',
    //     price:1999
    // })

     res.send('Estou bem')
     next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo ${req.query.completo} ano:${req.query.ano}`)
})

app.get('/clientes/:id',(req,res) =>{
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo',(req, res)=>{
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end',function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})



app.use('/opa', (req, res, next) => {
    res.send('Serei chamado?')
    next()
})

app.listen(3000, () =>{
    console.log('Backend executando...')
})