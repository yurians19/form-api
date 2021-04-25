'use strict'
const db = require('../../app/config/db.config')

module.exports = async (req,res) => {

    const suppliers = db.get('supplier')
    if (suppliers)
        res.status(200).send({ suppliers })
     else
        res.status(404).send({ message:'No hay Proveedores'})
}