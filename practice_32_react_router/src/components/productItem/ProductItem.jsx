/*
* Компонент для рендеринга карточки товара
*/
import { useState, useEffect } from 'react';
import Button from '../button/Button';
import s from './ProductItem.module.css';

export default function ProductItem( {product} ) {

    const [shouldRequest, setShouldRequest] = useState(false);

    useEffect( () => {
        if (shouldRequest) {
            fetch(`https://fakestoreapi.com/products/${product.id}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                })
                .finally( () => {
                    setShouldRequest(false);
                });
        }
    }, [shouldRequest]);

    // product.id
    return (
        <div className={s.productCard}>
            { product.img && <img className={s.productImg} src={product.img} /> }
            <div className={s.productNamePriceContainer}>
                <h3 className={s.productName}>{product.title}</h3>
                <p className={s.productPrice}>{product.price}</p>
            </div>
            <p className={product.description}>{product.description}</p>
            <div className={s.productButtonsContainer}>
                <Button clickHandler={ () => { setShouldRequest(true); }} classes={s.buttonAdd} buttonText="Add" />
                <Button classes={s.buttonRemove} buttonText="Remove" />
            </div>
        </div>
    );
}