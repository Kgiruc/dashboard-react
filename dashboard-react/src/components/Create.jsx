function Create() {
    
    function addBasket(e) {
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
                
            });
    }

    return (
    <button onClick={addBasket}>Add Basket</button>
  )
}

export default Create