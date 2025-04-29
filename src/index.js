const express = require('express')
const app = express()
const port = 3000
const pendaftarRouter = require('./routers/pendaftarRoute')
const daftarRouter = require('./routers/daftarRoute')

// Middleware untuk parsing JSON
app.use(express.json())

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.send('Selamat datang di API pendaftaran!')
})

app.use('/', pendaftarRouter)
app.use('/', daftarRouter)


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})
