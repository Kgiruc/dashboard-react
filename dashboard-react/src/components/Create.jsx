import { useState } from "react";
import ProductsForm from "./products/ProductsForm";

function Create({ addBasket }) {


    function getNewBasket(e) {
        e.preventDefault()
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: 1,
                        quantity: 1,
                    },
                    {
                        id: 50,
                        quantity: 2,
                    },
                ]
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
            <ProductsForm />
        </>
    )
}

export default Create