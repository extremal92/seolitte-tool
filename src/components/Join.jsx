import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import LightSpeed from 'react-reveal/LightSpeed';

function Join() { 

    return (
        <div className='join-bg'>
            <div className='container'>
                <div className='join'>
                    <LightSpeed left>
                    <div className='join-text'>
                        <span>Join</span> 
                        <VisibilitySensor>
                            {({isVisible}) => 
                                <span className='join-text-number'>
                                    {isVisible ? <CountUp end={123456} redraw={true} duration={6} /> : null}
                                </span>
                            }
                        </VisibilitySensor>
                        {/* <span className='join-text-number'>
                        <CountUp end={123456} redraw={true} duration={6}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        </span> */}
                        <span>professionals right now!</span>
                    </div>
                    </LightSpeed>
                    <LightSpeed right>
                    <div className='join-button'>
                        <button>Join seolitte</button>
                    </div>
                    </LightSpeed>
                </div>
            </div>
        </div>
    )
}

export default Join
