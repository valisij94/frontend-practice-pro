import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail( ) {

    const params = useParams();

    const [productData, setProductData] = useState({});

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then( resp => resp.json() )
            .then( data => setProductData(data));
    }, [params.id])

    return (
        <div>
            <div>
                <h3>{productData.title}</h3>
                <p>{productData.price}</p>
            </div>
            <p>{productData.description}</p>
        </div>
    );
}