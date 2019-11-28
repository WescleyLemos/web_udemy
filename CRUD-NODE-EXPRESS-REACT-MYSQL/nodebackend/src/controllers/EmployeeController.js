const controllers = {}

controllers.test = (req, res) => {
    const data = {
        nome:"John Smith",
        idade:24,
        cidade:"Palmas"
    }
    
    console.log("Enviado dados do controller employee")
    res.json(data)


}

module.exports = controllers