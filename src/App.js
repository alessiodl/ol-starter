import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Mappa from './components/Mappa';
import FloatingPanel from './components/FloatingPanel';
import Welcome from './components/Welcome';
import SampleForm from './components/SampleForm';

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
      >
        <Welcome msg='OpenLayers App Starter'/>
      </FloatingPanel>

       <FloatingPanel 
        modal={false}
        filled={false}
        id='panel1' 
        logo='fas fa-cog fa-lg' 
        title='Tools'
        animateIn='bounceInRight'
        animateOut='bounceOutRight'
        position='right-top right-top #map -10 10'
      >
        <div className="alert alert-warning"><i className="fas fa-info-circle"></i> The form is under construction</div>
        <SampleForm/>
      </FloatingPanel>
    </div>
  );  
}


export default App;
