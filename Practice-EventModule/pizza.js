const EventEmitter = require('node:events')

class pizza extends EventEmitter{

    order=0;

    constructor(){
        super();
    }

    placeOrder(){
        console.log('Order is being processed');
        this.emit('Ready', `Order ready ho r hai...${++this.order}`)
        
    }

}

module.exports.pizza = pizza;