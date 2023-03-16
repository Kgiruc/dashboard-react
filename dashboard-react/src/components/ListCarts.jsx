import React from 'react'

function ListCarts({basket}) {
  return (
    <div>
        {basket.carts.map((carts) => (
            <div key={carts.id} className="basket-container">
                <p>koszyk {carts.id}</p>
                <p>ilość produtków {carts.totalProducts}</p>
            </div>
        ))}
    </div>
  )
}

export default ListCarts