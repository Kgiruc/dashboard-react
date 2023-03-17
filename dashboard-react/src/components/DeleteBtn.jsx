function DeleteBtn({getBasketId, basket}) {
    
    function deleteCartSerwer() {
        fetch(`https://dummyjson.com/carts/${getBasketId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });

    }
    
    function removeBasket(getBasketId) {
        const newBasket = basket.filter((e) => e.getBasketId !== getBasketId)
    }



    return (
        <button className="delete-btn" onClick={deleteCartSerwer}>delete</button>
    )
}

export default DeleteBtn