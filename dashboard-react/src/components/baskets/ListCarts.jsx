import React, { useState } from 'react'
import Charts from './Charts'
import basket_logo from '../../assets/icons/basket.png'
import delete_logo from '../../assets/icons/bin.png'
import charts_logo from '../../assets/icons/line-chart.png'


function ListCarts({ basket, deleteBasket }) {
  const [open, setOpen] = useState()

  return (
    <div className='baskets__container'>
      {basket.map((carts) => (
        <div key={carts.id} className="basket-container">
          <img src={basket_logo} className="basket-container__basket-logo" alt="basket" />
          <p>koszyk {carts.userId}</p>
          <p>ilość produtków: {carts.totalProducts}</p>
          <div className='baskets__buttons__container'>
            <button onClick={() => deleteBasket(carts.id)}>
              <img src={delete_logo} className="basket-container__bin-logo" alt='delete' />
            </button>
            <button onClick={() => setOpen(carts.id)}>
              <img src={charts_logo} className="basket-container__bin-logo" alt="chart" />
            </button>
            {open === carts.id && <Charts produkt={carts.products} setOpen={setOpen} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListCarts