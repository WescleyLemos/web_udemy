const express = require('express')
const router = express.Router()


const EmployeeController = require('../controllers/EmployeeController')
router.get('/test', EmployeeController.test)
router.get('/save', (req,res)=>{
    res.json({status:"Employeed saved"})
})

module.exports = router;