const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/pendaftar.json');

// Membaca data dari file JSON
const readData = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { pendaftar: [] };
    }
};

// Menulis data ke file JSON
const writeData = (data) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing to database:', error);
        return false;
    }
};

// Menambah pendaftar baru
const tambahPendaftar = (dataPendaftar) => {
    const database = readData();
    const newPendaftar = {
        id: Date.now().toString(), // Generate simple ID
        ...dataPendaftar,
        tanggalDaftar: new Date().toISOString()
    };
    
    database.pendaftar.push(newPendaftar);
    return writeData(database) ? newPendaftar : null;
};

// Mendapatkan semua pendaftar
const getAllPendaftar = () => {
    const database = readData();
    return database.pendaftar;
};

// Mendapatkan pendaftar berdasarkan ID
const getPendaftarById = (id) => {
    const database = readData();
    return database.pendaftar.find(p => p.id === id);
};

module.exports = {
    tambahPendaftar,
    getAllPendaftar,
    getPendaftarById
}; 