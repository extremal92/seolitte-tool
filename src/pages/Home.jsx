import React from 'react';

import { Start, Tab, Features, IframeBlock, Join, Blog, Subscribe, MetaTags } from '../components';

function Home() {
  
  return (

      <div className="home">
        {/* <Join /> */}

        {/* <div className='container'>

        </div> */}
        <MetaTags 
          title={'SeoLitte Home'}
          description={'Seolitte Page Description Home'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Home Page'}
          googleDesc={'Google Description Seolitte Home Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Home Page'}
          fbOgDesc={'Facebook Description Seolitte Home Page'}
          fbOgImg={'https://seolitte.com/static/logo.png'}
        />
        <Start />
        <Tab/>
        <IframeBlock />
        <Features />
        <Join />
        <Blog />
        <Subscribe />

      </div>

  )
}

export default Home;
