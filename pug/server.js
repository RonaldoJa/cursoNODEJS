const express = require('express');
const app = express();
const rutas = require('./routes/index')
const producto = require('./routes/product')
const path = require('path')
const puerto = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', rutas);
app.use('/productos', producto)

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor: ${err}`)
    } else {
        console.log(`Servidor escuchando puerto: ${puerto}`)
    }
})