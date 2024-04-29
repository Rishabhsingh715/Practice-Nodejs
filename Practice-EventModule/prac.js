const {pizza} = require('./pizza');
const pizzaShop = new pizza();

function InitializeReadyOrder(){
    pizzaShop.on('Ready',(result)=>{
        console.log(result);
    })
}
InitializeReadyOrder();

// Counter to track the number of intervals
let intervalCount = 0;
// Store the interval ID to be able to clear it later
const intervalId = setInterval(() => {
    pizzaShop.placeOrder();
    intervalCount++;
    if (intervalCount >= 10) {
        clearInterval(intervalId);  // Stop the interval after 10 executions
    }
}, 1000);