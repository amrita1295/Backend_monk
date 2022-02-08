const MONGOOSE = require('mongoose');
const MONGOURI = "mongodb+srv://amrita:hEcF6q9QUuuExkJY@cluster0.xlwbk.mongodb.net/Angular?retryWrites=true&w=majority";
MONGOOSE.Promise = global.Promise;

// module.exports = (config) => {
    // MONGOOSE.connect(config.connectionString);
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
    // let db = MONGOOSE.connection;

    // db.once('open', (err) => {
    //     if (err) {
    //         throw err;
    //     }

    //     console.log('MongoDB is ready!');
    // });

    require('../models/Cart');
    require('../models/User');
    require('../models/Role').init();
    require('../models/Receipt');
    require('../models/Book');
    require('../models/Comment');
