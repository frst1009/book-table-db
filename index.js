const express = require('express');
const { db } = require('./config/db');
const { bookRoutes } = require('./routes/bookroutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { countryRoutes } = require('./routes/countryRoutes');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())

app.use('/api/book', bookRoutes)


app.use('/api/writer', writerRoutes)
app.use('/api/country', countryRoutes)


app.listen(3000,()=>{
    console.log("okey");
    });
