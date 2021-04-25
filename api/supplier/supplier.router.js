'use strict'
const express = require('express')
const api = express.Router()
const supplierSaveController = require('./supplier-save.controller')
const supplierGetAllController = require('./supplier-get.controller')
const supplierDeleteController = require('./supplier-delete.controller')

api.get('/supplier',supplierGetAllController)
api.post('/supplier',supplierSaveController)
api.delete('/supplier/:name',supplierDeleteController)

module.exports = api