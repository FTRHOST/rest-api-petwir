const express = require('express');
const daftarRouter = express.Router();
const daftarController = require('../controller/daftarController');

daftarRouter.post('/daftar', daftarController)



module.exports = daftarRouter;