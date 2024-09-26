const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World')
});


app.get('/contact', (req,res)=>{
    res.send('Contact Us')
});

app.get('/about', (req,res)=>{
    res.send('About Us')
});

app.listen(8080,()=>{
    console.log('listening at port 8080.')
});