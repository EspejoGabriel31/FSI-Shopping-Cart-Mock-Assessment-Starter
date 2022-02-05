let quantity = 1
let quantity2 = 1

let subTotal = quantity + quantity2
const totalDisplay = document.querySelector('h1')

function updateQuantity(displayQuantity){
    let total = document.querySelector('.total-quantity')
    total.textContent = 'Quantity: ' + displayQuantity
    totalDisplay.textContent = subTotal
}

function updateQuantity2(displayQuantity){
    let total = document.querySelector('.total-quantity2')
    total.textContent = 'Quantity: ' + displayQuantity
    totalDisplay.textContent = subTotal
}


const quantityUp = document.querySelector('#quantity-up')
const quantityDown = document.querySelector('#quantity-down')

quantityUp.addEventListener('click',function(){
    ++subTotal
    updateQuantity(++quantity)
})

quantityDown.addEventListener('click',function(){
    if(quantity > 0){
        --subTotal
        updateQuantity(--quantity)
        
    }
})

const quantityUp2 = document.querySelector('#quantity-up2')
const quantityDown2 = document.querySelector('#quantity-down2')

quantityUp2.addEventListener('click',function(){
    ++subTotal
    updateQuantity2(++quantity2)
})

quantityDown2.addEventListener('click',function(){
    if(quantity2 > 0){
        --subTotal
        updateQuantity2(--quantity2)
        
    }
})


const removeButton = document.querySelector('.remove')


