import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';
import ModalPanel from './components/ModalPanel';
import RegularPanel from './components/RegularPanel';
import Welcome from './components/Welcome';

function App() {  
  return (
    <div className="App">
      <Navbar 
        appName="MyApp" 
        appShortDescription="OL ReactJS Starter Application"
        toolsLinkName="Tools"
        aboutLinkName="About"
      />
      <Mappa/>
      <ModalPanel 
        id='modal1' 
        logo='far fa-comment-alt fa-lg' 
        title='Welcome'
      >
        <Welcome />
      </ModalPanel>
    </div>
  );
}

export default App;
