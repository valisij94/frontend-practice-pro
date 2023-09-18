import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';
import ProductList from './components/productList/ProductList';

import {Route, Routes, BrowserRouter as Router, Link} from 'react-router-dom';
import ProductDetail from './components/productDetail/ProductDetail';
import { ThemeContext, UserContext, initialUserState } from './context/context';
import Button from './components/button/Button';
import ContactsForm from './components/contacts/ContactsForm';

import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {

  const [theme, setTheme] = useState('light');

  const [user, setUser] = useState(initialUserState);

  const changeTheme = () => {
     (theme === 'light' ? setTheme('dark') : setTheme('light'));
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{
        changeTheme,
        theme}}
      >
        <div className="App">
          <Logo/>
          <Router>
            <Link className="link" to={`/products`}>Products</Link>
            <Link className="link" to={`/login`}>Login</Link>
            <Link className="link" to={`/`}>Main</Link>
            <Link className="link" to={`/contacts`}>Contacts</Link>
            <Routes>
              <Route path='/login' element={<LoginForm />} />
              <Route path='/' element={<Greeting />} />
              <Route path='/products' element={<ProductList />}>
                <Route path=':category' element={<ProductList /> }/>
              </Route>
              <Route path='detail/:id' element={ <ProductDetail /> } />
              <Route path='/contacts' element={<ContactsForm />} />
              <Route path='*' element={<p>Sorry, we could not find the page!</p> } />
            </Routes>
          </Router>
          <Button
            clickHandler={ changeTheme }
          />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}