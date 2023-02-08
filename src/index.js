const express = require('express'); 
const path= require('path');
const cors = require('cors')

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(require('./routes/router'));

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
});