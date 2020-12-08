import React from 'react';
import {Bounce} from 'react-reveal';


import wu1 from '../assets/img/who_use_1.svg'
import wu2 from '../assets/img/who_use_2.svg'
import wu3 from '../assets/img/who_use_3.svg'

function Features() {
    return (
        <div className='features-bg'>
            <div className='container'>
                <div className='page-title-center'>
                    <h3>Who can benefit from SeoLitte?</h3>
                </div>
                <div className='features'>
                    <Bounce>
                        <div className='features-item'>
                        <div className='features-item_img'>
                            <img src={wu1} alt="who use" />
                        </div>
                        <div className='features-item_title'>
                            <span>Digital Marketing Agencies</span>
                        </div>
                        </div>
                    </Bounce>
                    <Bounce>
                        <div className='features-item'>
                        <div className='features-item_img'>
                            <img src={wu2} alt="who use" />
                        </div>
                        <div className='features-item_title'>
                            <span>In-house SEO Teams</span>
                        </div>
                        </div>
                    </Bounce>
                    <Bounce>
                        <div className='features-item'>
                        <div className='features-item_img'>
                            <img src={wu3} alt="who use" />
                        </div>
                        <div className='features-item_title'>
                            <span>SMB and Enterprise</span>
                        </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default Features
