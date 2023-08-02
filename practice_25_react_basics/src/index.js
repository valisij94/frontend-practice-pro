import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Greeting from './components/Greeting';
import Button from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function App() {
  return (
    <div className="App">
      <Logo />
      <Greeting />
      <Button/>
    </div>
  );
}