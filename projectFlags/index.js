const express = require('express')
const path = require('path');
const app = express();
const countriesApi = require('./model/api')
console.log(countriesApi.countries[0])

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
    res.send(JSON.stringify(countriesApi.guess()));
});

app.get('/:index', (req, res) => {
    const index = parseInt(req.params.index)
    console.log(countriesApi.countries[index])
    res.send(JSON.stringify(countriesApi.countries[index]))
})

app.listen(3000, () => {
    console.log('Running. . .');
});