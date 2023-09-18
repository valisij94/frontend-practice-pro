/*
* Компонент для рендеринга карточки товара
*/
import { useState, useEffect } from 'react';
import Button from '../button/Button';
import s from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../store/actions/cartActions';

export default function ProductItem( {product} ) {

    const dispatch = useDispatch();

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
                <Button clickHandler={ () => {
                        dispatch(addToCartAction(product.id));
                    }} classes={s.buttonAdd} buttonText="Add" />
                <Button clickHandler={ () => {
                    dispatch(removeFromCartAction(product.id));
                } }
                classes={s.buttonRemove} buttonText="Remove" />
                <Link to={`/detail/${product.id}`}>Details</Link>
            </div>
        </div>
    );
}