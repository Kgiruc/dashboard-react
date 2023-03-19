import { useEffect, useState } from "react"

function ProductsForm({addProductProp}) {
    const [product, setProduct] = useState([{}])
    const [text, setText] = useState("")
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${text}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
            })
            .catch(err => console.log(err))
    }, [text])

    function addProduct() {
        addProductProp({
            id: product[0].id,
            quantity: quantity,
            title: product[0].title
        })
    }
    

    return (
        <div>
            <label>
                nazwa produktu:
                <input
                    type="text"
                    required
                    placeholder="iphone 9"
                    value={text}
                    onChange={e => { setText(e.target.value) }}
                    
                />
                {product.length > 0 ? <p>{product[0].title}</p> : <p>nie ma produktu</p> }
                ilość:
                <input
                    type="number"
                    required
                    value={quantity}
                    placeholder="1"
                    onChange={e => { setQuantity(e.target.value) }}
                />
                <p>{quantity}</p>
                <button onClick={addProduct}>add</button>
            </label>
        </div>
    )
}

export default ProductsForm