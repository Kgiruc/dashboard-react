import { useState } from "react";
import ListProducts from "./ListProducts";
import ProductsForm from "./ProductsForm";

function Create({ addBasket }) {
    const [products, setProducts] = useState([])

    const addProduct = product => setProducts([...products, product])
    const deleteProduct = id => setProducts(products.filter(productItem => productItem.id != id))


    function getNewBasket(e) {
        e.preventDefault()
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 2,
                products: products
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                addBasket(data)
                setProducts([])
            })
    }

    return (
        <>
            <button onClick={getNewBasket}>Add Basket</button>
            <ProductsForm addProductProp={addProduct} />
            {products && <ListProducts products={products} deleteProductProp={deleteProduct}/>}
        </>
    )
}

export default Create