import React from 'react';
import {Zoom} from 'react-reveal';
import Iframe from 'react-iframe';



function IframeBlock() {
    return (
        <div className='video-bg'>
            <div className='container'>
            <div className='video'>
                <div className='page-title-center'>
                <h3>HOW DOES SEO WORK ?</h3>
                </div>
                <Zoom>
                <div className='video-iframe'>
                <Iframe url="https://www.youtube.com/embed/R-XxAk8-OXY"
                    frameborder="0"
                    // allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    className="video-iframe-item"/>
                </div>
                </Zoom>
            </div>
            </div>
        </div>
    )
}

export default IframeBlock;
