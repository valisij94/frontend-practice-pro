import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';
import ProductList from './components/productList/ProductList';

import {Route, Routes, BrowserRouter as Router, Link} from 'react-router-dom';
import ProductDetail from './components/productDetail/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <Logo theme={theme}/>
      <Router>
        <Link to={`/products`}>Products</Link>
        <Link to={`/login`}>Login</Link>
        <Link to={`/`}>Main</Link>
        <Routes>
          <Route path='/login' element={<LoginForm theme={theme} />} />
          <Route path='/' element={<Greeting theme={theme} />} />
          <Route path='/products' element={<ProductList />}>
            <Route path=':category' element={<ProductList /> }/>
          </Route>
          <Route path='detail/:id' element={ <ProductDetail /> } />
          <Route path='*' element={<p>Sorry, we could not find the page!</p> } />
        </Routes>
      </Router>
    </div>
  );
}