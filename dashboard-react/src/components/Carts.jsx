import { useEffect, useState } from "react"
import ListCarts from "./ListCarts"


function Carts() {
    const [basket, setBasket] = useState()
    const [loading, setLoading] = useState(true)

    function deleteBasket(id) {
        const newList = Object.values(basket).filter(e => e.id != id)
        setBasket(newList)
        fetch(`https://dummyjson.com/carts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert(`Usunąłeś z serwera koszyk ${data.userId}`)
            });

    }
    

    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setBasket(data.carts)
                console.log(data.carts)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading
            })
    }, [])

    return (
        <div>
            {basket && <ListCarts basket={basket} deleteBasket={deleteBasket} />}
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default Carts