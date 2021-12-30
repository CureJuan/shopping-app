import React from 'react'
import ShoppingCart from "./components/shoppingCart";
import "./index.css"

function App() {
  return (
    <div>
     <div className="marca">
     <h1>Comprar App</h1> 
     <input className="buscar"
     type="search" 
     placeholder=' 🔍Búsqueda'>
     </input>
     </div>
     <ShoppingCart/>
    </div>
  );
}

export default App;
