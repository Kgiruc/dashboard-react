import React from 'react'

function ListCarts({basket}) {
  return (
    <div className='baskets'>
        {basket.carts.map((carts) => (
            <div key={carts.id} className="basket-container">
                <p>koszyk {carts.id}</p>
                <p>ilość produtków {carts.totalProducts}</p>
                <div>
                    <button>delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListCarts