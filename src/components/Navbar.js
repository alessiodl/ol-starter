import React, {Component} from 'react';

class Navbar extends Component {

    render(){
        return ( 
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
                <div className="navbar-brand">
                    <span className="fas fa-layer-group fa-lg"></span>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapse_target">
                    <span className="navbar-text">
                        { this.props.appName } | <small>{ this.props.appShortDescription }</small>
                    </span>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="btn btn-primary" id="show-tools-btn"><i className="fas fa-cog fa-lg"></i> {this.props.toolsLinkName}</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" id="show-about-btn"><i className="fas fa-question-circle fa-lg"></i> {this.props.aboutLinkName}</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;