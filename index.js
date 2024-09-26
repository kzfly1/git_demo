const express = require('express');
const axios = require('axios');

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

app.get('/posts', (req, res)=>{
    //HTTP requests (axios)
    //Web server
    //DB server
    axios.get('http://localhost:3000/posts').then((resp)=>{
        res.json(resp.data)
    }).catch((error)=>{
        console.error(error)
    })
})

app.listen(8080,()=>{
    console.log('listening at port 8080.')
});

//json server
//HTTP
//URL
//METHOD(GET, POST, PUT, DELETE)