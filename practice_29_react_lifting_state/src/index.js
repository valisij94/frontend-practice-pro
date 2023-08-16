import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import ButtonsBlock from './components/ButtonsBlock';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <Logo theme={theme}/>
      <Greeting theme={theme} />
      <ButtonsBlock theme={theme} userData={ {name: 'Vasilij', status: 'active'} }/>
      <LoginForm theme={theme} />
    </div>
  );
}