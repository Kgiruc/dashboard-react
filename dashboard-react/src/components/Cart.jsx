import { useEffect, useState } from "react"
import ListCarts from "./ListCarts"


function Cart() {
    const [basket, setBasket] = useState([{}])

    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setBasket(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                basket.carts ? (<ListCarts basket={basket}/>) : (
                <p>loding...</p>
                )
            }
        </div>
    )
}

export default Cart