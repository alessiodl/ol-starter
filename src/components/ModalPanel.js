import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import $ from 'jquery';
// import jsPanel
import '../../node_modules/jspanel4/dist/jspanel.min.css';
import { jsPanel } from '../../node_modules/jspanel4/es6module/jspanel.min.js';
import '../../node_modules/jspanel4/es6module/extensions/modal/jspanel.modal.min.js';

class ModalPanel extends Component {

    state = { 
        visible: false
    }

    panelContent = ReactDOMServer.renderToStaticMarkup(this.props.children)
    
    componentDidMount = () => {   
        // Z-INDEX
        jsPanel.ziBase = 1200;
        // Crea il pannello modale
        jsPanel.modal.create({
            id              : this.props.id,
            theme           : this.props.color + ' filled',
            headerTitle     : this.props.title,
            contentSize     : '450 auto',
            content         : this.panelContent,
            closeOnBackdrop : false,
            closeOnEscape   : false,
            //dragit        : { containment: [65, 10, -45, 10] },
            callback        : function() {
                this.content.style.padding = '10px';
                this.style.height = 'auto';
            }
        });
        // Aggiorna lo stato del componente
        this.setState({visible: true});
    }

    componentWillUnmount = () => {
        // Aggiorna lo stato del componente
        this.setState({visible: false});
    }

    render() { 
        return ('')
    }
}
 
export default ModalPanel;