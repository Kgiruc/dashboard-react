import { useEffect, useState } from "react"
import ListCarts from "./ListCarts"


function Carts() {
    const [basket, setBasket] = useState(null)

    function deleteBasket(id) {
        const newList = Object.values(basket).filter(e => e.id != id)
        setBasket(newList)
    }

    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setBasket(data.carts)
                console.log(data.carts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {basket && <ListCarts basket={basket} deleteBasket={deleteBasket} />}
        </div>
    )
}

export default Carts