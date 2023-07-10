/*
  *Title: Uptime Monitoring Application
*/
//Dependencies
const http=require('http');
const url=require('url');
const {StringDecoder}=require('string_decoder');
//app object module scaffolding
const app={};
//configuration
app.config={
    port:3000
};
//Create server
app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`Listening to port ${app.config.port}`)
    })
}
app.handleReqRes =(req,res)=>{
    //requesting handiling
    //get the url and parse it
    const parsedUrl=url.parse(req.url,true)
    const path=parsedUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/+$/g,'')
    console.log(trimmedPath);
    const method=req.method.toLowerCase();
    const queryStringObject=parsedUrl.query;
    const headers=req.headers;
    const decoder=new StringDecoder('utf-8');
    let realData='';
    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer)
    })
    req.on('end',()=>{
        realData+=decoder.end();
        console.log(realData);
        res.end('Hello programmers');

    })
    //response handle
   
}
//start the server
app.createServer();