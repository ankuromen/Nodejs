
const mongoose = require('mongoose');
const port = process.env.PORT ||3000
const app = require('./app');
let dburl=process.env.DB_URL;
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));