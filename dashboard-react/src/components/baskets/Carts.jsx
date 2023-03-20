import { useEffect, useState } from "react"
import ListCarts from "../baskets/ListCarts"
import Create from "../products/Create";


function Carts() {
    const [basket, setBasket] = useState()
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)

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
        <div className="carts__container">
            <h1>DASHBOARD</h1>
            {basket &&
            <>
            
                <ListCarts basket={basket} deleteBasket={deleteBasket} />
                <button className="carts__button" onClick={() => setOpen(true)}>dodaj koszyk</button>
                {open && <Create addBasket={addBasket} setOpen={setOpen}/>}
            </>
            }
            {loading && <p>Loading...</p>}
        </div>
    )
}

export default Carts