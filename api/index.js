const express = require('express')
const pendaftarRouter = require('../src/routers/pendaftarRoute')

const app = express()
const port = 3000
const daftarRouter = require('./routers/daftarRoute')

// Middleware untuk parsing JSON
app.use(express.json())

// Routes
app.use('/api', pendaftarRouter)
app.use('/', daftarRouter)

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`)
})

// Export the Express API
module.exports = app
