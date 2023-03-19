import React, { useState } from 'react'
import Charts from './Charts'

function ListCarts({ basket, deleteBasket }) {

  return (
    <div className='baskets'>
      {basket.map((carts) => (
        <div key={carts.id} className="basket-container">
          <p>koszyk {carts.userId}</p>
          <p>ilość produtków: {carts.totalProducts}</p>
          <div>
            <button onClick={() => deleteBasket(carts.id)}>x</button>
            <Charts produkt={carts.products}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCarts