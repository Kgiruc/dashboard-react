import { useEffect, useState } from "react"

function ProductsForm() {
    const [product, setProduct] = useState([{}])
    const [text, setText] = useState("")
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${text}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)
            });
    }, [text])

    // console.log(Object.keys(product.products).lenght)

    return (
        <div>
            <label>
                nazwa produktu:
                <input
                    type="text"
                    required
                    onChange={e => { setText(e.target.value) }}
                />
                ilość:
                <input
                    type="number"
                    required
                    onChange={e => { setQuantity(e.target.value) }}
                />
                <p>{quantity}</p>
                {text ? <p>{product.products[0].id}</p> : null}
            </label>
        </div>
    )
}

export default ProductsForm