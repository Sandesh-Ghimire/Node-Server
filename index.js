const http=require('http');
const fs = require("fs");
const url= require("url");


const myServer= http.createServer((req,res)=>
{
    //testing
    const log=`${Date.now()}: ${req.url}  \t new request received\n`;
    const myUrl=url.parse(req.url,true)
  console.log(myUrl)

    // non blocking that is async 
    fs.appendFile("log.txt",log,(err,data)=>
    {
        switch(myUrl.pathname)
        {
            case "/":
                res.end("homepage");
                break;
            case"/about":
                const userName= myUrl.query.myname;
                res.end(`hi, ${userName}`);
                break;
            default:
                res.end("404 not found");

        }

       
    }
    )
    
});

myServer.listen(5000,()=>console.log("server started"));




