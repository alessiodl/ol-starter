import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';
import FloatingPanel from './components/FloatingPanel';
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
      <FloatingPanel 
        modal={true}
        filled={true}
        id='modal1' 
        logo='far fa-comment-alt fa-lg' 
        title='Welcome'
        // position='right-top right-top #map -10 10'
      >
        <Welcome msg='Starter Application Template'/>
      </FloatingPanel>
    </div>
  );
}

export default App;
