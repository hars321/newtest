const express=require('express');
const app=express();
const path=require('path');
var port = normalizePort(process.env.PORT || '8000');
app.set('port', port);
app.use(express.static('/'));

app.get('/',(req,res)=>{
    
    res.sendFile(__dirname+'/index.html');
})
app.listen(3000,()=>{
    console.log('listening ');
});
