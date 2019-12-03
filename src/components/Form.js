import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-12">
                            <input className="form-control form-control-sm" placeholder="First Input" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input className="form-control form-control-sm" placeholder="Second Input" />
                        </div>
                        <div className="col">
                            <input className="form-control form-control-sm" placeholder="Third Input" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-sm btn-block btn-primary">
                            <i className="fas fa-paper-plane"></i> Submit</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-block btn-primary">
                            <i className="fas fa-ban"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Form;