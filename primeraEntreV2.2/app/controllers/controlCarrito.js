import { leer, escribir } from '../data/data.js'

let carrito = []

const date = new Date();
const timestamp = date.toLocaleDateString();





export const getCarrito = async(req, res) => {
	const producto = await leer('productos');

	res.json(carrito)
}

export const postCarrito = async(req, res) => {
	// const producto = await leer('productos');
	if (carrito.length === 0) {
		const id = 1
		carrito.push({ id, timestamp })
		res.status(201).send('Carrito creado con exito')
	} else if (carrito.length > 0) {
		const idSuma = carrito[carrito.length - 1].id
		const id = idSuma + 1
		carrito.push({ id, timestamp })
		res.status(201).send('Carrito creado con exito')
	}
	await escribir('carrito', carrito);
}

export const deleteCarrito = async(req, res) => {
	const id = Number(req.params.id)

	if (!isNaN(id)) {
		const nuevoArray = carrito.filter(carritos => carritos.id != id)
		carritos = []
		carritos.push(nuevoArray)
		res.status(201).send('Producto eliminado con exito')
		await escribir('carrito', carrito);
	} else {
		res.status(404).send('No se pudo eliminar el producto')
	}
}

export const postCarritoProd = async(req, res) => {
	const allCart = await leer('carrito');
	const producto = await leer('productos')
	const id = Number(req.params.id)

	const index = allCart.findIndex(element => element.id == id)
	allCart[index].product.push(producto)

	await escribir('carrito', allCart);

}