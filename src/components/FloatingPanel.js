import { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';
// import jsPanel
import '../../node_modules/jspanel4/dist/jspanel.min.css';
import { jsPanel } from '../../node_modules/jspanel4/es6module/jspanel.min.js';
import '../../node_modules/jspanel4/es6module/extensions/modal/jspanel.modal.min.js';
// CSS animation
import '../../node_modules/animate.css';

class FloatingPanel extends Component {
    // Tema del pannello
    panelTheme = () => {
        var rgb = $('.bg-primary').css('background-color');
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : ''; 
    }
    // Posizionamento del pannello
    panelConfig = () => {

        let color     = this.props.filled ? this.panelTheme() + ' filled' : this.panelTheme()
        let position  = this.props.position ? this.props.position : 'center center'
        let dragging  = this.props.modal ? false : { containment: [65, 10, -45, 10] }
        
        return {
            id              : this.props.id,
            theme           : color,
            headerLogo      : '<i class="'+this.props.logo+'"></i>',
            headerTitle     : this.props.title,
            contentSize     : '400 auto',
            content         : '',
            closeOnBackdrop : false,
            closeOnEscape   : false,
            position        : position,
            dragit          : dragging,
            animateIn       : 'animated '+this.props.animateIn,
            animateOut      : 'animated '+this.props.animateOut,
            boxShadow       : 1,
            callback        : function() {
                this.content.style.padding = '10px';
                this.style.height = 'auto';
                this.header.style.padding = '4px 8px';

                /* Appende alla proprietà 'content' un DIV con id univoco derivato da quello del pannello.
                Questo spazio sarà utilizzato in Index.js per popolare il pannello con un componente 
                renderizzato in un ReactPortal */
                $(this.content).append('<div id="__'+this.id+'__"></div>')
            }
        }
    }

    componentDidMount = () => {
        // Z-INDEX
        jsPanel.ziBase = 1200;
        // Crea il pannello
        if (this.props.modal) {
            jsPanel.modal.create( this.panelConfig() );
        } else {
            jsPanel.create( this.panelConfig() );
        }
    }

    render() { 
        return ( '' );
    }
}
 
export default FloatingPanel;