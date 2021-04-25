'use strict'
const express = require('express')
const api = express.Router()
const dataGetAllController = require('./data-get.controller')

api.get('/data',dataGetAllController)

module.exports = api