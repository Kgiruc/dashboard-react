import React, { useState } from 'react'
import Charts from './Charts'

function ListCarts({ basket, deleteBasket }) {
  const[open,setOpen] = useState()

  return (
    <div className='baskets__container'>
      {basket.map((carts) => (
        <div key={carts.id} className="basket-container">
          <p>koszyk {carts.userId}</p>
          <p>ilość produtków: {carts.totalProducts}</p>
          <div>
            <button onClick={() => deleteBasket(carts.id)}>x</button>
            <button onClick={() => setOpen(carts.id)}>Statystyka koszyka</button>
            {open === carts.id && <Charts produkt={carts.products} setOpen={setOpen}/>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCarts