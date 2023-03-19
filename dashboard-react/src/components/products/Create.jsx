import { useState } from "react";
import ListProducts from "./ListProducts";
import ProductsForm from "./ProductsForm";

function Create({ addBasket, setOpen }) {
    const [products, setProducts] = useState([])

    const addProduct = product => setProducts([...products, product])
    const deleteProduct = id => setProducts(products.filter(productItem => productItem.id != id))


    function getNewBasket() {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: products, //serwer po metodzie POST nie zmienia id dlatego klucz zostaje taki sam 
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                addBasket(data)
                setProducts([])
                setOpen(false)
            })
    }

    return (
        <>  
            {products.length > 0 &&<button onClick={getNewBasket}>Add Basket</button>}
            <ProductsForm addProductProp={addProduct} />
            {products && <ListProducts products={products} deleteProductProp={deleteProduct} />}
        </>
    )
}

export default Create