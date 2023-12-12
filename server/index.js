const express = require('express');

const bodyParser = require('body-parser')

const path = require('path');

const db = require('./db');

const app = express();

const PORT = 3000;

const clientPath = path.resolve(__dirname, "../client/dist/");

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(express.static(clientPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
});

//CRUD
// CREATE - add data to db
app.post('/api/links', db.createLink);
// READ - get data from db
app.get('/api/links', db.getLinks);
// UPDATE - update data in db
app.put('/api/links/:id', db.updateLink);
// DELETE - remove data from db
app.delete('/api/links/:id', db.deleteLink);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});