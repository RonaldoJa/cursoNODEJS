class Contenedor{
    constructor(){
        this.productos= [];
    }

    getAll(){
        return this.productos
    }
    
    newProduct(title, price, thumbnail){
        if(this.productos.length==0){
            const elemento = {
                title,
                price,
                thumbnail,
                id:1
            }
            this.productos.push(elemento)
            return elemento
        }else{
            const lastIndex = this.productos[this.productos.length-1].id
            const Index= lastIndex + 1
            const elemento = {
                title,
                price,
                thumbnail,
                id:Index
            }
            this.productos.push(elemento)
            return elemento
        }
    }
}

module.exports= Contenedor