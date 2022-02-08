const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const{MONGOURI}=require('./config/key')
// const CONFIG = require('./config/config');

// const PORT = 8000;
const PORT= process.env.PORT ||8000;
// let env = 'development';

const APP = EXPRESS();

// require('./config/database.config')(CONFIG[env]);
// require('./config/database.config');
MONGOOSE.connect(MONGOURI, { 
    // useNewUrlParser: true, 
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
    })
    MONGOOSE.connection.on('connected',()=>{
        console.log("Mongo connected:")
    })
    
    
    MONGOOSE.connection.on('error',(err) => {
        console.log("error connected:",err)
    })
    require('./models/Cart');
    require('./models/User');
    require('./models/Role').init();
    require('./models/Receipt');
    require('./models/Book');
    require('./models/Comment');
    require('./config/express')(APP);
    require('./config/routes')(APP);

if(process.env.NODE_ENV=="production"){
    APP.use(EXPRESS.static('client/build'))
    const path= require('path')
    APP.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
APP.listen(PORT);
console.log(`Server is listening on port ${PORT}`);