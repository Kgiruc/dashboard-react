import trash_logo from "../../assets/icons/bin.png"

function ListProducts({products, deleteProductProp}) {
    
  return (
    products.map((product) => (
        <div key={product.id} className="products__container">
            <p>{product.title}</p>
            <p>ilość: {product.quantity}</p>
            <button onClick={() => deleteProductProp(product.id)}><img src={trash_logo} alt="delete"/></button>
        </div>
    ))
  )
}

export default ListProducts