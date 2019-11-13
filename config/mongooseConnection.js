const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true,})
    .then(resp => console.info('Connected to mongodb:'+ JSON.stringify(resp)))
    .catch(err => {
        console.error('Error in mongoose connection: '+ JSON.stringify(err));
    });
module.exports = mongoose;
