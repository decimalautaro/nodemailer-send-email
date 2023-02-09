const express = require('express'); 
require('dotenv').config();
const app = express();
const path= require('path');
const cors = require('cors')


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


app.use(require('./routes/router'));

// app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
});