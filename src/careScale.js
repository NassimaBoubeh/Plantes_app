import {ReactComponent as Sun} from './assets/sun.svg';
import {ReactComponent as Water} from './assets/water.svg';
import './careScale.css';
import React, {props} from 'react';
function CareScale(props){

    return(
        <div className='care-scale'>
            <div >
                {
                    (props.typeC === "water") ? 
                    (<Water />) : (<Sun />)
                }
            </div>
        </div>
    );
}

export default CareScale;