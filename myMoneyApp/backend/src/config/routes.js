const express = require('express')

module.exports = function(server){
    //definir url base
    const router = express.Router()
    server.use('/api', router)

    //rota ciclo de pagamento
    const BillingCyle = require('../api/billingCycle/billingCycleService')
    BillingCyle.register(router, '/billingCycles')
    
}