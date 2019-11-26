import React from 'react';

const Navbar = () => {

    return ( 
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
                <span className="fas fa-layer-group fa-lg"></span>
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapse_target">
                
                <span className="navbar-text">
                Application Name | <small>Application short description</small>
                </span>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#dropdown_taget">
                        Application Menu <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-target">    
                    <a href="#" className="dropdown-item" id="show-tools-btn"><i className="fas fa-cog fa-fw"></i> Tools</a>
                    <a href="#" className="dropdown-item" id="show-info-btn"><i className="fas fa-user fa-fw"></i> Info</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item" id="show-about-btn"><i className="fas fa-question-circle fa-fw"></i> About</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;