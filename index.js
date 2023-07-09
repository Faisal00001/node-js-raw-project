/*
  *Title: Uptime Monitoring Application
*/
//Dependencies
const http=require('http');
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
    //response handle
    res.end('Hello world');
}
//start the server
app.createServer();