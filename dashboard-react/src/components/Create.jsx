import { useState } from "react";
import ProductsForm from "./products/ProductsForm";

function Create({ addBasket }) {
    const [products, setProducts] = useState([])

    const addProduct = product => setProducts([...products, product])

    console.log("asdas", products)


    function getNewBasket(e) {
        e.preventDefault()
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: products
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                addBasket(data)
            })
    }

    return (
        <>
            <button onClick={getNewBasket}>Add Basket</button>
            <ProductsForm addProductProp={addProduct}/>
        </>
    )
}

export default Create