import s from './ProductList.module.css';
import ProductItem from '../productItem/ProductItem';

import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export default function ProductList( ) {

    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const { category } = useParams();

    const navigate = useNavigate();

    useEffect( () => {

        fetch('https://fakestoreapi.com/products/categories')
            .then( resp => resp.json() )
            .then( data => setCategories(data));

        const timer = setTimeout( () => {
            navigate('/login');
        }, 2500);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect( () => {
        const url = category ? `https://fakestoreapi.com/products/category/${category}` :
        `https://fakestoreapi.com/products`;
        fetch(url)
            .then( resp => resp.json() )
            .then( data => setProducts(data));
    }, [category]);

    return (
        <div>
            <div className={s.categoriesContainer}>
                { categories.map( cat => <Link key={cat} to={`/products/${cat}`}><h3>{cat}</h3></Link>)}
            </div>
            <Routes>
                <Route path='jewelery' element={<h2>Luxury segment</h2>} />
                <Route path='electronics' element={<h2>For EDU</h2>} />
            </Routes>
            <div className={s.productListContainer}>
                {
                    products.length > 0 ?
                    products.map( product => <ProductItem product={product} key={product.id}/> ) :
                    <p>Please wait...</p>
                }
            </div>
        </div>
    );
}