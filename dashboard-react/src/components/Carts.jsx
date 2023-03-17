import { useEffect, useState } from "react"
import ListCarts from "./ListCarts"


function Carts() {
    const [basket, setBasket] = useState([{}])
 
    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setBasket(data.carts)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function deleteBasket(id) {
        const newList = Object.values(basket.carts).filter(e => e.id != id)
        console.log(newList)
    } 
   
    

 

    return (
        <div>
            {
                basket &&
                <ListCarts basket={basket} deleteBasket={deleteBasket}/>  
            }
        </div>
    )
}

export default Carts