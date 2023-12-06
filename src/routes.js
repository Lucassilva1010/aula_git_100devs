const express = require('express')
const routes = express.Router()
const { calculaidade } = require('./controller/user-controller')

routes.get('/user', calculaidade)

module.exports = routes