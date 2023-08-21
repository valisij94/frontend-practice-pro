import s from './ProductList.module.css';
import ProductItem from '../productItem/ProductItem';

import { useEffect, useState } from 'react';

export default function ProductList( ) {

    /*
    6. Добавляем индикатор загрузки товаров в компонент `ProductList`. Нужно, пока идет загрузка, показывать вместо списка товаров параграф с текстом "Подождите, идет загрузка...".
 */
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then( resp => resp.json() )
            .then( data => setProducts(data) )
    }, []);

    return (
        <div className={s.productListContainer}>
            { products.length > 0 ?
            products.map( product => <ProductItem product={product} key={product.id}/> ) : <p>Please wait...</p>}
        </div>
    );
}