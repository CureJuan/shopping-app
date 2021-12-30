import React from 'react'
import { BsFillCartPlusFill, BsCartDashFill } from 'react-icons/bs'

const CartItem = ({data, delFromCart, addToCart}) => {
    let{id, name, price, quantity} = data;
   
    return (
        <div className="cart">
          <button className="x" onClick={()=> delFromCart(id,true)}>X</button>  
            <p className="title-prod">{name}</p>
            <p>${price}.00 x {quantity} = ${price * quantity}.00</p>
             <BsFillCartPlusFill className="sumar col-md-4" onClick={()=> addToCart(id)}/>
             <BsCartDashFill className="elimina col-md-4" onClick={()=> delFromCart(id)}/>
            <br/>
        </div>
    )
}

export default CartItem

