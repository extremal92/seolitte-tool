import React from 'react';
import Popup from 'reactjs-popup';
import {CabinetLogin} from './CabinetLogin';


const contentStyle = {
    background: "rgba(255,255,255)",
    width: "80%",
    border: "none",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    overflow: "hidden"
};

function Cabinet() {
    return (
        <div className='cabinet'>
            <Popup 
                trigger={<button> <i className="fa fa-sign-in" aria-hidden="true"></i> </button>}
                overlayStyle={{ background: "rgba(0,0,0, 0.5)" }}
                contentStyle={contentStyle}
            >
                {(close) => (
                    <div>
                        <CabinetLogin  closePopUp={close} />
                    </div>
                )}
                
            </Popup>
        </div>
    )
}

export default Cabinet
