function ListProducts({products, deleteProductProp}) {
    
  return (
    products.map((product) => (
        <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <button onClick={() => deleteProductProp(product.id)}>x</button>
        </div>
    ))
  )
}

export default ListProducts