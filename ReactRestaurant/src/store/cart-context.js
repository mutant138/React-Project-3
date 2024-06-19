import React from "react";


const CartContext = React.createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
    increaseQuantity:  id =>{},
    decreaseQuantity: id =>{}
})


export default CartContext

