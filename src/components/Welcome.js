import React from 'react';

const Welcome = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                {props.msg}
            </div>
        </div>
    );
}
 
export default Welcome;
