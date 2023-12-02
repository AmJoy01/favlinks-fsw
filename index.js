const express = require('express')

const path = require('path')

const app = express()

const PORT = 3000

const clientPath = path.resolve(__dirname, "../favlinks-fsw/client/dist")

app.use(express.static(clientPath))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../favlinks-fsw/client/dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})