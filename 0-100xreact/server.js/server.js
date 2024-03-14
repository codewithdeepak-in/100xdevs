const express = require('express');
const cors = require('cors');


const app = express();
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/form', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
})