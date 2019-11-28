import React,{ Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';
// import jsPanel
import '../../node_modules/jspanel4/dist/jspanel.min.css';
import { jsPanel } from '../../node_modules/jspanel4/es6module/jspanel.min.js';
// CSS animation
import '../../node_modules/animate.css';

class RegularPanel extends Component {

    state = { 
        visible: false,
        panelTheme: () => {
            var rgb = $('.bg-primary').css('background-color');
            rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : ''; 
        }
    }

    // Contenuto del pannello dal componente children
    panelContent = ReactDOMServer.renderToStaticMarkup(this.props.children)
    
    componentDidMount = () => {  
        // Z-INDEX
        jsPanel.ziBase = 1200;
        // Crea il pannello modale
        jsPanel.create({
            id              : this.props.id,
            theme           : this.state.panelTheme(),
            headerLogo      : '<i class="'+this.props.logo+'"></i>',
            headerTitle     : this.props.title,
            contentSize     : '450 auto',
            content         : this.panelContent,
            closeOnBackdrop : false,
            closeOnEscape   : false,
            dragit          : { containment: [65, 10, -45, 10] },
            animateIn       : 'animated bounceInDown',
            animateOut      : 'animated bounceOutUp',
            callback        : function() {
                this.content.style.padding = '10px';
                this.style.height = 'auto';
                this.header.style.padding = '4px 8px';
            }
        });
        // Aggiorna lo stato del componente
        this.setState({visible: true});
    }

    componentWillUnmount = () => {
        // Aggiorna lo stato del componente
        this.setState({visible: false});
    }

    render() {  return '' }
}
 
export default RegularPanel;