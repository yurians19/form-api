'use strict'
const db = require('../../app/config/db.config')

module.exports = (req,res) => {
  const { name, business_name, address } = req.body

  if( !name || !business_name || !address){
      res.status(404).send({ message:'faltan datos'})
  }

  const supplier = db.get('supplier')

  if (supplier.findIndex({ name }).value() === -1) {
    supplier.push({ name, business_name, address }).write()
  } else {
    res.status(409).send({ message:'ERROR: elemento existe'})
  }

  const supplierSaved = supplier.find({ name }).value()

  if (supplierSaved) {
    res.status(200).send({supplier: supplierSaved})
  }else {
    res.status(404).send({message: 'no se ha registrado el usuario'})
  }
}