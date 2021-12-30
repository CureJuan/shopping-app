import React from 'react'


const ProductItem = ({data, addToCart}) => {

    let {id, name, price} = data;
    return <div className="item" >
      <p>{name}</p>
      <p>${price}.00</p>
      <button className="btn btn-secondary" onClick={()=> addToCart(id)}>Agregar</button>
    </div>
};

export default ProductItem;