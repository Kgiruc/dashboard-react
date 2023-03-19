function ListProducts({products}) {
  return (
    products.map((product) => (
        <div key={product.id}>
            <p>{product.title}</p>
        </div>
    ))
  )
}

export default ListProducts