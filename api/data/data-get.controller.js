'use strict'
const db = require('../../app/config/db.config')

module.exports = async (req,res) => {
    const data = db.get('data')
    if (data)
        res.status(200).send({ data })
     else
        res.status(404).send({ message:'No hay data'})
}