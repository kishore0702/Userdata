var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/routes');
const { default: mongoose } = require('mongoose');
app.use(bodyParser.json());
app.use(cors());
app.use('/',routes);


var PORT=process.env.PORT ||8080;
const URI="mongodb://venkatkishore0702:KvSko1P6taVGk9Rv@ac-rptdcto-shard-00-00.okltz2i.mongodb.net:27017,ac-rptdcto-shard-00-01.okltz2i.mongodb.net:27017,ac-rptdcto-shard-00-02.okltz2i.mongodb.net:27017/?ssl=true&replicaSet=atlas-12es7z-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(URI).then(()=>{
   try{
    app.listen(PORT,()=>{
        console.log("MongoDB connected");
    });
   }catch(err){
    console.error(err);
   }
})

app.get('/',(req,res)=>{
    res.send("Hello World");
});

