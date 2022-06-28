const Contenedor = require('../contenedor')
const contenedor = new Contenedor()

const getProduct = (req, res) => {
    const productos= contenedor.getAll()
    res.render('allProducts.ejs',{productos})
}

const postProduct = (req, res) => {
    const {title, price, thumbnail} = req.body 
    contenedor.newProduct(title, price, thumbnail)
    res.redirect('/productos')
}

const viewForm =(req,res)=>{
    res.render('form.ejs')
}


module.exports = {
    getProduct,
    postProduct,
    viewForm
}