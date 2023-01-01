//메인 file
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/form', (req, res) =>{
    res.render('form');
});

app.get('/form_receiver', (req, res) =>{
    var title = req.query.title
    var description = req.query.description
    res.send(title + description);
});

app.post('/form_receiver', (req, res) =>{
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + description);
});

app.get('/topic/:id', (req, res) =>{
    var topics = [
        'javascript',
        'nodejs',
        'express',
    ];
    var output = `
    <a href='/topic?id=0'>javascript</a>
    <a href='/topic?id=1'>nodejs</a>
    <a href='/topic?id=2'>express</a>
    ${topics[req.params.id]}
    `
    res.send(output);
});

app.get('/topic/:id/:mode', (req, res) =>{
    res.send(req.params.id + req.params.mode);
});

app.get('/', (req, res) =>{
    res.send('hello this is express server!');
});

app.get('/login', (req, res) =>{
    res.send('<h1>log in please</h1>');
});

app.get('/route', (req, res) =>{
    res.send('hh');
});

app.get('/template', (req, res) =>{
    res.render('temp', {time:Date(), title:'template'});
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});