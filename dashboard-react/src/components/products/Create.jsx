import { useState } from "react";
import ListProducts from "./ListProducts";
import ProductsForm from "./ProductsForm";
import add_basket_logo from '../../assets/icons/correct.png'

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
            
            <ProductsForm addProductProp={addProduct} />
            {products && <ListProducts products={products} deleteProductProp={deleteProduct} />}
            {products.length > 0 &&
                <button
                    className="add__buttton"
                    onClick={getNewBasket}
                >
                    <img src={add_basket_logo} alt="dodaj nowy koszyk" />
                </button>}
        </>
    )
}

export default Create