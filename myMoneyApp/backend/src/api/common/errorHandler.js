const _ = require('lodash')
const nodeRestful = require('node-restful')
//middlewere é chamado no arquivo billieCycleService.js
module.exports = (req, res, next) =>{
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
        res.status(500).json(errors)
    }else{
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {

    const errors = []
    // _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    for(let campo in nodeRestfulErrors){
        errors.push({ [campo]: nodeRestfulErrors[campo].message })
    }
    return errors
}