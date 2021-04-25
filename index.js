'use strict'
const api = require('./app/index')
const chalk = require('chalk')
const db = require('./app/config/db.config')
const port = process.env.PORT || 3000

//seeders
db.defaults({ supplier: [], data: { candidate: 'Bienvenido Candidato 01', version: 1.0} })
    .write()

// Inicio del server
api.listen(port, () => console.log(`${chalk.green('[rest-api]')} server listening on port ${port}`))
