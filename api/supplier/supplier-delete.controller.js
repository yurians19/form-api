'use strict'
const db = require('../../app/config/db.config')

module.exports = (req,res) => {
    const { name } = req.params
    const supplier = db.get('supplier')
        .remove({ name })
        .write()

    if (!!supplier.length)
      res.status(200).send({ supplier})
    else
      res.status(404).send({ message:'proveedor no existe'})
}