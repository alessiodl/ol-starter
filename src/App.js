import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';
import ModalPanel from './components/ModalPanel';
import Welcome from './components/Welcome';

function App() {  
  return (
    <div className="App">
      <Navbar 
        appName="MyApp" 
        appShortDescription="OL ReactJS Starter Application"
      />
      <Mappa/>
      <ModalPanel id='modal1' logo='far fa-comment-alt fa-lg' title='Welcome' color='#1C2331'>
        <Welcome />
      </ModalPanel>
    </div>
  );
}

export default App;
