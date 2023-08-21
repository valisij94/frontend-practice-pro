/*
* Компонент для рендеринга карточки товара
*/
import Button from '../button/Button';
import s from './ProductItem.module.css';

export default function ProductItem( {product} ) {
    return (
        <div className={s.productCard}>
            { product.img && <img className={s.productImg} src={product.img} /> }
            <div className={s.productNamePriceContainer}>
                <h3 className={s.productName}>{product.title}</h3>
                <p className={s.productPrice}>{product.price}</p>
            </div>
            <p className={product.description}>{product.description}</p>
            <div className={s.productButtonsContainer}>
                <Button classes={s.buttonAdd} buttonText="Add" />
                <Button classes={s.buttonRemove} buttonText="Remove" />
            </div>
        </div>
    );
}