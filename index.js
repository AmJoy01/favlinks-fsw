const express = require('express');

const path = require('path');

// const db = require('./db');

const app = express();

const PORT = 3000;

const clientPath = path.resolve(__dirname, "../favlinks-fsw/client/dist");

app.use(express.static(clientPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../favlinks-fsw/client/dist', 'index.html'))
});

//CRUD
// CREATE - add data to db
// app.post('/api/links', db.createLink);
// // READ - get data from db
// app.get('/api/links', db.getLinks);
// // UPDATE - update data in db
// app.put('/api/links/:id', db.updateLink);
// // DELETE - remove data from db
// app.delete('/api/links/:id', db.deleteLink);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});