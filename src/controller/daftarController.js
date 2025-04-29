const daftarController = (req, res) => {
    const { tambahPendaftar } = require('../utils/database');
    const { nama, umur, alamat } = req.body

    //validasi data
    if (!nama || !umur || !alamat ) {
        return res.status(400).json({
            message: 'Data tidak lengkap'
        });
    }

    const newPendaftar = tambahPendaftar({ nama, umur, alamat });

    //input data
    if (!newPendaftar) {
        return res.status(500).json({
            message: 'Gagal menambahkan pendaftar'
        });
    }

    res.status(201).json({
        message: 'Pendaftaran berhasil',
        data: newPendaftar
    });
}

module.exports = daftarController;