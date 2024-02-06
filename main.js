

const express = require('express');

const http = require('http');
const fs = require('fs');
const app = require('./app');
const server = http.createServer(function(req,res){

    if(req.url=='/'){

        res.write('This is Home Page.')
        res.end()

    }else if(req.url=='/about'){

        res.write('This is About Page.');
        res.end();

    }else if(req.url=='/contact'){

        res.write('This is Contact Page.');
        res.end();
    }else if(req.url=='/file-write'){

        fs.writeFile('demo.text','Hello World',(e)=>{

            if(e){
                res.end('there is an error!');
            }else{
                res.end('Create demo.text file successfully');
            }

        });
    };
    res.end();
});





  
server.listen(5500,function(){
    console.log('Server Runnig on 5500');
})