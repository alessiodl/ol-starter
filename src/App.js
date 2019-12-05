import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';
import FloatingPanel from './components/FloatingPanel';

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
        animateIn='bounceInDown'
        animateOut= 'bounceOutUp' 
        // position='right-top right-top #map -10 10'
      />

      <FloatingPanel 
        modal={false}
        filled={false}
        id='panel1' 
        logo='fas fa-cog fa-lg' 
        title='Tools'
        animateIn='bounceInRight'
        animateOut='bounceOutRight'
        position='right-top right-top #map -10 10'
      />
    </div>
  );
}

export default App;
