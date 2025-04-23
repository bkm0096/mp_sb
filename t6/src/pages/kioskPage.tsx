import {useEffect, useState} from "react";
import useCartStore from "../stores/cartStore.tsx";


const getProducts = async () => {
    const response:Response = await fetch('http://122.34.51.94:8090/api/products/list')

    return response.json()
}

function KioskPage() {

    const [product, setProduct] = useState([])
    const {items, addCart} = useCartStore()

    console.log("-------------------------")
    console.log(items)

    useEffect(() => {
        getProducts().then( res => {
            setProduct(res.dtoList)
        } )
    }, [])

    return (
        <div>
            <h1>Kiosk Page</h1>
            <div>
                <ul>
                    {product.map( (p:Product) =>
                        <li key={p.pno} onClick={() => addCart(p)}>
                            {p.pno} - {p.pname} - {p.price}
                        </li>)}
                </ul>
            </div>
            <div>
                <hr/>
                <div>Cart Items</div>
                <hr/>
                <ul>
                    {items.map( (items:CartItem, idx:number) =>
                        <li key={idx}>
                            {items.product.pno} - {items.product.pname} - {items.qty}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default KioskPage;