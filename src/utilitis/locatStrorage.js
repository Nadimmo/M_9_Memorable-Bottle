/* eslint-disable no-unused-vars */
const getLocatStorage = ()=>{
    const cartItem = localStorage.getItem('cart')
    if(cartItem){
       return JSON.parse(cartItem)
    }
    return []
}

const converToStingify = (cart)=>{
    const convert = JSON.stringify(cart)
    localStorage.setItem('cart',convert)
}

const saveToLS = (id)=>{
    const cart = getLocatStorage()
    cart.push(id)
    converToStingify(cart)
}

const removeToLs = (id)=>{
    const cart = getLocatStorage()
    // removing every item
    const remaining = cart.filter(idx => idx !== id)
    saveToLS(remaining)
}

export {saveToLS,getLocatStorage,removeToLs}