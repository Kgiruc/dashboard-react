import { useEffect, useState } from "react"
import ListCarts from "./ListCarts"
import Create from "./Create"


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
            .then(
                alert(`Usunąłeś z serwera koszyk`)
            );
    }

    function addBasket(newbasket) {
        setBasket([...basket, newbasket])
    }
    

    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setBasket(data.carts)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {basket &&
            <>
                <ListCarts basket={basket} deleteBasket={deleteBasket} />
                <Create addBasket={addBasket}/>
            </>
            }
            {loading && <p>Loading...</p>}

        </div>
    )
}

export default Carts