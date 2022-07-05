let carrito = []

const date = new Date();
const timestamp = date.toLocaleDateString();


export const getCarrito = (req, res) => {
	res.json(carrito)
}

export const postCarrito = (req, res) => {
	if (carrito.length === 0) {
		const id = 1
		const { nombre } = req.body
		carrito.push({ nombre, id, timestamp })
		res.status(201).send('Carrito creado con exito')
	} else if (carrito.length > 0) {
		const idSuma = carrito[carrito.length - 1].id
		const id = idSuma + 1
		const { nombre } = req.body
		carrito.push({ nombre, id, timestamp })
		res.status(201).send('Carrito creado con exito')
	}
}