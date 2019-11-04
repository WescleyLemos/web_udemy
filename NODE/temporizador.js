const schedule = require('node-schedule')

//segundos - minutos - hora -dia - mes - dia semana,
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * *', function() {
    console.log('Executando Tarefa!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 17
regra.second = 25

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Tarefa 2', new Date().getSeconds)
})