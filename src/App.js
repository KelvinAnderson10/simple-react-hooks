import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <div style={{backgroundColor: dark ? 'black': 'white'}}>
      <p style={{color: dark ? 'white': 'black'}}>Hai, ini contoh react hooks !</p>
      <button onClick={()=> setDark(!dark)}>Set Theme {dark? 'white': 'black'}</button>
    </div>
  );
}

export default App;
