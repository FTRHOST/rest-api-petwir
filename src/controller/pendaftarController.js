const pendaftarController = (req, res) => {
    const { getAllPendaftar } = require('../utils/database');

    const pendaftarList = getAllPendaftar();
    res.json({
        message: 'Data pendaftar berhasil diambil',
        data: pendaftarList
    });
  }

  module.exports = pendaftarController;