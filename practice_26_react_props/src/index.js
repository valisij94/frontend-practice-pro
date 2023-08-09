import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import ButtonsBlock from './components/ButtonsBlock';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {

  return (
    <div className="App">
      <Logo />
      <Greeting />
      <ButtonsBlock userData={ {name: 'Vasilij', status: 'active'} }/>
    </div>
  );
}