import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';

function App() {  
  return (
    <div className="App">
      <Navbar/>
      <Mappa />
    </div>
  );
}

export default App;
