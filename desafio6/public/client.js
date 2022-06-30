const socket = io()
const formMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagesPool = document.querySelector('#messagesPool')
const formProducts = document.querySelector('#formProducts')
const titulo = document.querySelector('#titulo')
const precio = document.querySelector('#precio')
const imagen = document.querySelector('#imagen')



function sendProduct() {
    try {
        const title = titulo.value
        const price = precio.value
        const thumbnail = imagen.value
    
        socket.emit('client:product', { title, price, thumbnail })
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

async function renderProducts(products) {
    const response = await fetch('/plantilla.hbs')
    const plantilla = await response.text()
    
    document.querySelector('#productosTabla').innerHTML = ""
    products.forEach(product => {
        const template = Handlebars.compile(plantilla)
        const html = template(product) 
        document.querySelector('#productosTabla').innerHTML += html 
    }); 
}   

formProducts.addEventListener('submit', event => {
    event.preventDefault()
    sendProduct()
    titulo.value = ""
    precio.value = ""
    imagen.value = ""
})

function sendMessage() {
    try {
        const username = usernameInput.value
        const message = messageInput.value
        const date = new Date();
        const result = date.toLocaleString();
    
        socket.emit('client:message', { username,result, message })
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

function renderMessages(messagesArray) {
    try {
        const html = messagesArray.map(messageInfo => {
            return(`<div>
                <strong style="color:blue">${messageInfo.username}</strong>:
                <em style="color: #804000">[${messageInfo.result}]</em>
                <em style="color:green">${messageInfo.message}</em> </div>`)
        }).join(" ");

        messagesPool.innerHTML = html
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

formMessage.addEventListener('submit', event => {
    event.preventDefault()
    sendMessage()
    messageInput.value = "" 
})

socket.on('server:product', products => {
    renderProducts(products)
})

socket.on('server:message', renderMessages);