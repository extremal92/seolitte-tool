import React from 'react';
import { Link } from "react-router-dom";
import { MetaTags } from '../components';

function NotFound({ location }) {
  
    return (
      <div className='container'>
        <MetaTags 
            title={'SeoLitte 404 Page not found'}
            description={'Seolitte Page Description 404 Page not found'}
            canonical={'https://seolitte.com/'}
            googleName={'Google Name Seolitte 404 Page not found Page'}
            googleDesc={'Google Description Seolitte 404 Page not found Page.'}
            fbOgUrl={'https://seolitte.com'}
            fbOgTitle={'Facebook Title Seolitte 404 Page not found Page'}
            fbOgDesc={'Facebook Description Seolitte 404 Page not found Page'}
            fbOgImg={'https://seolitte.com/static/logo.png'}
        />
          
        <div className='breadcrumbs'>
            <div className='breadcrumbs__item'>
                <Link to='/' className="breadcrumbs__item-link"><span>Home</span></Link>
                <span className="breadcrumbs__item-arrow">{'>'}</span>
            </div>
            <div className='breadcrumbs__item active'>
                <Link to='' className="breadcrumbs__item-link">404 Page Not Found</Link>
            </div>
        </div>

        <div className="pages__title"><h1>404 Page Not Found</h1></div>
        <div className='pages'>
            <div>
                <h3>
                No match for <code>{location.pathname}</code>
                </h3>
            </div>
        </div>
      </div>
    );
}

export default NotFound;
