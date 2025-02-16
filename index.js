const express = require("express");
const { default: mongoose } = require("mongoose");
const PORT = 3000;

const app = express()

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open', () =>{
    console.log('Connected to database');
})

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter);



app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
} )