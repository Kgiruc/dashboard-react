import { useEffect, useState } from "react"
import add_logo from "../../assets/icons/add.png"

function ProductsForm({ addProductProp }) {
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
        <div className="form__container">
            <label>
                nazwa produktu:
                <input
                    type="text"
                    required
                    placeholder="iphone 9"
                    value={text}
                    onChange={e => { setText(e.target.value) }}

                />

                ilość:
                <input
                    type="number"
                    required
                    value={quantity}
                    placeholder="1"
                    onChange={e => { setQuantity(e.target.value) }}
                />
                <div className="form__results">
                    {product.length > 0 ? <p>{product[0].title}</p> : <p>nie ma produktu</p>}
                    <p>x{quantity}</p>
                    <button onClick={addProduct}><img src={add_logo} alt="add"/></button>
                </div>
            </label>
        </div>
    )
}

export default ProductsForm