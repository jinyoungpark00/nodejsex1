const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views_file');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/topic/new', (req, res) =>{
    res.render('form');
});

app.get('/topic', (req, res) =>{
    fs.readdir('data', (err, files) =>{
        if(err){
            console.error(err);
            res.status(500).send('server error');
        }
        res.render('view', {topics:files});
    });
});

app.get('/topic/:id', (req, res) =>{
    var id = req.params.id;
    fs.readdir('data', (err, files) =>{
        if(err){
            console.error(err);
            res.status(500).send('server error');
        }
        fs.readFile('data/'+id, 'utf-8', (err, data) =>{
            if(err){
                console.error(err);
                res.status(500).send('server error');
            }
            res.render('view', {topics:files, title:id, description:data});
        });
    });
});

app.post('/topic', (req, res) =>{
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, (err)=>{
        if(err){
            console.error(err);
            res.status(500).send('server error');
        }
        res.send('good!');
    });
});

app.listen(3000, ()=>{
    console.log('connected 3000 port');
});