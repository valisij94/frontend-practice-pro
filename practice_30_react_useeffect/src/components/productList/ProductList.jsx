import s from './ProductList.module.css';
import ProductItem from '../productItem/ProductItem';

import { products } from '../../data/products.js';

export default function ProductList( ) {

    return (
        <div className={s.productListContainer}>
            {products.map( product => <ProductItem product={product} key={product.id}/> )}
        </div>
    );
}