const express = require('express')
const app = express()
const pendaftarRouter = require('../src/routers/pendaftarRoute')

const port = 3000
const daftarRouter = require('../src/routers/daftarRoute')

// Routes
app.use('/', pendaftarRouter)
app.use('/', daftarRouter)

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})


