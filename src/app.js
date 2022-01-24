const express = require('express')
const cors = require('cors')
const app = express();

//config
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors());
app.use(express.json())
//routes
app.get('/', (req, res)=>{
    res.send('bienvenido a mi api rest full')
})

app.use('/api/listavideos', require('./routes/listaVideos'))


module.exports = app;