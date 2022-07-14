const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(8080, () => console.log("todo bien"))
const io = new IOServer(expressServer)

const database=require('./dbsqlite3')
const dbMariadb = require('./db')

const Producto = require('../controllers/procuct')
const productosContenedor = new Producto(dbMariadb, "producto")
const ContainerMessages = require('../controllers/messages')
const messagesContainer = new ContainerMessages(database, "mensaje")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', async socket=>{
    console.log('se conecto un usuario')
    const productos= await productosContenedor.getAll()

    io.emit('serverSend:product', productos)

    socket.on('client:product', async (data)=>{
        const {title, price, thumbnail} = data
        await productosContenedor.newProduct(title, price, thumbnail) 
        const productos= await productosContenedor.getAll()
        io.emit('serverSend:product', productos)
    })

   const messages= await messagesContainer.getAllMessages();
   
   io.emit('server:message', messages)

    socket.on('client:message', async(messageInfo)=>{
        const {mail,tiempochat,message} = messageInfo
        await messagesContainer.newMessages(mail, tiempochat, message) 
        const messages= await messagesContainer.getAllMessages() 
        io.emit('server:message', messages)
    })
})
