
const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(8080, () => console.log("todo bien"))
const io = new IOServer(expressServer)
const messages = []
const products = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', socket => {
    console.log('Se conecto un usuario nuevo')

    io.emit('server:product', products)
    
    socket.on('client:product', data => {
        products.push(data)
        io.emit('server:product', products)
    })

    io.emit('server:message', messages)

    socket.on('client:message', messageInfo => {
        messages.push(messageInfo)
        io.emit('server:message', messages)
    })
})
