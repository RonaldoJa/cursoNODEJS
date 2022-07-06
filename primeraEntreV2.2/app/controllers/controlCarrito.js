import { leer, escribir } from '../data/data.js'

let carrito = []

const date = new Date();
const timestamp = date.toLocaleDateString();

//Listar todos los productos guardados en el carrito segun su id
export const getCarrito = async(req, res) => {
	const allCart = await leer('carrito');
	const id = Number(req.params.id)
	if (id) {
		const carritoParam = allCart.filter(carrito => {
			return carrito.id === id
		})
		res.json(carritoParam)
	} else {
		res.json(allCart)
	}
}

//Crea carrito 
export const postCarrito = async(req, res) => {
	if (carrito.length === 0) {
		const id = 1
		carrito.push({ id, timestamp })
		res.status(201).send(`Carrito creado con exito, id del carrito ${id}`)
	} else if (carrito.length > 0) {
		const idSuma = carrito[carrito.length - 1].id
		const id = idSuma + 1
		carrito.push({ id, timestamp })
		res.status(201).send(`Carrito creado con exito, id del carrito ${id}`)
	}
	await escribir('carrito', carrito);
}

//Elimina carrito
export const deleteCarrito = async(req, res) => {
	const allCart = await leer('carrito');
	const id = Number(req.params.id)

	if (!isNaN(id)) {
		const nuevoArray = allCart.filter(producto => producto.id != id)
		console.log(nuevoArray)
		await escribir('carrito', nuevoArray);
		res.status(201).send('Carrito eliminado con exito')
	} else {
		res.status(404).send('No se pudo eliminar el carrito')
	}
}

//Agrega productos al carrito segun su id
export const postCarritoProd = async(req, res) => {
	const allCart = await leer('carrito');
	const producto = await leer('productos');
	const id = Number(req.params.id)
	const index = allCart.findIndex(element => element.id == id)
	const carritoSeleccionado = allCart[index];
	if(allCart[index] == undefined) {
		res.status(401).send('Carrito no encontrado')
	} else {
		carritoSeleccionado.Producto = producto;
		await escribir('carrito', allCart);
		res.send('carrito encontrado').status(200)
	}
}

//Elimina productos segun su id y la id del carrito
export const deleteProductForId = async (req, res) => {
	const allCart = await leer('carrito');
	const id = Number(req.params.id)
	const id_prod = Number(req.params.id_prod)
	const index = allCart.findIndex(element => element.id == id)
	const carritoSeleccionado = allCart[index];
	if(allCart[index] == undefined) {
		res.status(401).send('Carrito no encontrado')
	} else {
		const nuevoArray = carritoSeleccionado.Producto.filter(producto => producto.id != id_prod)
		carritoSeleccionado.Producto = nuevoArray;
		await escribir('carrito', allCart);
		res.send(`Producto eliminado del carrito exitosamente`).status(200);
	}
}