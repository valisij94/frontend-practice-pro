import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import ButtonsBlock from './components/ButtonsBlock';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';
import Button from './components/button/Button';
import ProductList from './components/productList/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {

  const [theme, setTheme] = useState('light');
  const [greet, setGreet] = useState(false);

  return (
    <div className="App">
      <Logo theme={theme}/>
      <Button clickHandler={ () => {setGreet(old => !old);} } buttonText="Toggle Greeting visibility" />
      { greet && <Greeting theme={theme} /> }
      <ButtonsBlock theme={theme} userData={ {name: 'Vasilij', status: 'active'} }/>
      <LoginForm theme={theme} />
      <ProductList />
    </div>
  );
}