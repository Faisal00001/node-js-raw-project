/*
  *Title: Uptime Monitoring Application
*/
//Dependencies
const http=require('http');
const url=require('url');
const {StringDecoder}=require('string_decoder');
const {handleReqRes}=require("./helpers/handleReqRes")
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
app.handleReqRes =handleReqRes;
//start the server
app.createServer();