import React, {useReducer} from 'react'
import { shoppingReducer, shoppingInitialState } from '../reducers/shoppingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { TYPES } from "../actions/shoppingAction";
import logo from "../imagenes/logo.png"


const ShoppingCart = () => {

const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

const {products, cart} = state;

const addToCart = (id) =>{
 //  console.log(id);
    dispatch({type: TYPES.ADD_TO_CART, payload:id})
}

const delFromCart = (id,all = false) =>{
if(all) {
    dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
 } else {
    dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
 }
};
const clearCart = () =>{
    dispatch({type: TYPES.CLEAR_CART})
}

    return (
        <div>
            <article className="box grid-responsive">
                {products.map((product)=> (
                <ProductItem key={product.id} data={product} addToCart={addToCart}/>
                ))}
            </article>
            <div className="carrito">
                <p>Total de Compra: $.00</p>
            <img className="logo-cart" src={logo}/> 
            <button className="clear" onClick={clearCart}>Vaciar Carrito</button>
            <article>
            {cart.map((item,index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} addToCart={addToCart}/>
            ))}
            </article>
            </div>
        </div>
    )
}

export default ShoppingCart
