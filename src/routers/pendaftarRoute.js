const express = require('express')
const pendaftarRouter = express.Router()
const pendaftarController = require('../controller/pendaftarController')

pendaftarRouter.get('/pendaftar', pendaftarController)

module.exports = pendaftarRouter;