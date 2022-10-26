/** Eventos en Node */
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => {
    console.log('recibido')
    console.log(data)
})

customEmitter.emit('response',)