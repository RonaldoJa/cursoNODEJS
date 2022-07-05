//CALL MODULES
import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';

//INITIALIZATIONS
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//SETTINGS
app.set('port', process.env.PORT || 8080);



//STATIC FILES
// app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import mainRoutes from './app/routes/main-routes.js'
import index from './app/routes/index.js'
import carrito from './app/routes/carrito.js'


//ROUTES
app.use('/', mainRoutes);
app.use('/api/productos', index);
app.use('/api/carrito', carrito);

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});