import React, { useState } from 'react'

function ListCarts({ basket, deleteBasket }) {

  return (
    <div className='baskets'>
      {basket.map((carts) => (
        <div key={carts.id} className="basket-container">
          <p>koszyk {carts.userId}</p>
          <p>ilość produtków: {carts.totalProducts}</p>
          <div>
            <button onClick={() => deleteBasket(carts.id)}>x</button>
            <button>statistic</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCarts