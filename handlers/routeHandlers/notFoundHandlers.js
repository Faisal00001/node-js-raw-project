// Title: Not found handlers
// 404 not found handler

//Module scaffolding
const handler={};

handler.notFoundHandler=(requestProperties,callback)=>{
    console.log(requestProperties);
    callback(404,{
        message:'Your requested url not found'
    })
}
module.exports=handler;