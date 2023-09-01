require('dotenv').config();
const express = require('express');
const app = express();
const customerRouter = require('./api/customer.router');

app.use(express.json());


app.use('/restapi',customerRouter);
app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server   :   http://localhost:${process.env.APP_PORT}`);
})

