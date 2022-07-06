import { leer, escribir } from '../data/data.js'

// Array de productos

let productos = []

const date = new Date();
const timestamp = date.toLocaleDateString();


// Lista de controllers



// Obtener la lista de productos

export const getProductos = async(req, res) => {
	const allProducts = await leer('productos');
	res.json(allProducts)
}

// Obtener la lista de productos por parmetro

export const getProductoId = async(req, res) => {
	const allProducts = await leer('productos');
	const id = Number(req.params.id)
	if (id) {
		const productoParam = allProducts.filter(producto => {
			return producto.id === id
		})
		res.json(productoParam)
	} else {
		res.json(allProducts)
	}
}

// Agregar un porducto por medio de un formulario

export const postProducto = async(req, res) => {
	if (productos.length === 0) {
		const id = 1
		const { title, price, thunbail, code, stock} = req.body
		productos.push({ title, price, thunbail, id, code, stock, timestamp })
		res.status(201).send('Producto cargado con exito')
	} else if (productos.length > 0) {
		const idSuma = productos[productos.length - 1].id
		const id = idSuma + 1
		const { title, price, thunbail, code, stock } = req.body
		productos.push({ title, price, thunbail, id, code, stock, timestamp })
		res.status(201).send('Producto cargado con exito')
	}
	await escribir('productos', productos);
}

// Modificar un producto

export const putProducto = async(req, res) => {
	const allProducts = await leer('productos');
	const id = Number(req.params.id)

	if (!isNaN(id)) {
		const { title, price, thunbail, code, stock } = req.body

		allProducts.forEach(producto => {
			if (producto.id === id) {
				producto.title = title
				producto.price = price
				producto.thunbail = thunbail
				producto.code = code
				producto.stock = stock
				producto.timestamp = timestamp
			}
		})
		res.status(201).send('El producto se modifico con excito')
	} else {
		res.status(404).send('El producto no existe')
	}
	await escribir('productos', productos);
}

// Eliminar un producto

export const deleteProducto = async(req, res) => {
	const allProducts = await leer('productos');
	const id = Number(req.params.id)

	if (!isNaN(id)) {
		const nuevoArray = allProducts.filter(producto => producto.id != id)
		console.log(nuevoArray)
		await escribir('productos', nuevoArray);
		res.status(201).send('Producto eliminado con exito')
	} else {
		res.status(404).send('No se pudo eliminar el producto')
	}
}