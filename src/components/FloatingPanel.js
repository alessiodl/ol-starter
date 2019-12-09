import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import jsPanel
import '../../node_modules/jspanel4/dist/jspanel.min.css';
import { jsPanel } from '../../node_modules/jspanel4/es6module/jspanel.min.js';
import '../../node_modules/jspanel4/es6module/extensions/modal/jspanel.modal.min.js';
// CSS animation
import '../../node_modules/animate.css';

class FloatingPanel extends Component {

    state = {
        visible: false
    }

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
            content         : '<div id="__'+this.props.id+'__">...</div>',
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
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            visible: true
        })

        if (this.props.modal) {
            // Z-INDEX
            jsPanel.ziBase = 1210;
            // Crea pannello modale
            jsPanel.modal.create( this.panelConfig() );
        } else {
            // Z-INDEX
            jsPanel.ziBase = 1200;
            // Crea pannello
            jsPanel.create( this.panelConfig() );
        }
        // Renderizza il componente children nel contenuto
        ReactDOM.render(this.props.children, document.getElementById('__'+this.props.id+'__'));
    }
    
    render() {
        return ''
    }
}
 
export default FloatingPanel;