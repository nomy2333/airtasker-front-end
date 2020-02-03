import React from 'react';
import AdNav from './nav';

const AdLayout = (props) => {
    return (
        <div className="admin_container">
            <div className="admin_left_nav">
                <AdNav/>

            </div>
            <div className="admin_right">

                {props.children}

            </div>

        </div>
    )
};
export default AdLayout;