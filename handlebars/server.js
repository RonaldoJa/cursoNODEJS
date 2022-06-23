const express = require('express');
const app = express();
const rutas = require('./routes/index')
const producto = require('./routes/product')
const { engine } = require('express-handlebars')
const path = require('path')
const puerto = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine ({
    extname: 'hbs',
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs'),
    layoutsDirt: path.join(__dirname, './views/layouts' ),
    partialsDirt: path.join(__dirname, './views/partials')
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))


app.use('/', rutas);
app.use('/productos', producto)


app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor: ${err}`)
    } else {
        console.log(`Servidor escuchando puerto: ${puerto}`)
    }
})