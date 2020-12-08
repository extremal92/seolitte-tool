import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs, MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function Price() {

  const dispatch = useDispatch();
  const items = useSelector(({ pages }) => pages.items.price);
  const isLoaded = useSelector(({ pages }) => pages.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPages());
  }, [dispatch]);

  return (
    <div className='container'>
      <MetaTags 
        title={'SeoLitte Price'}
        description={'Seolitte Page Description Price'}
        canonical={'https://seolitte.com/'}
        googleName={'Google Name Seolitte Price Page'}
        googleDesc={'Google Description Seolitte Price Page.'}
        fbOgUrl={'https://seolitte.com'}
        fbOgTitle={'Facebook Title Seolitte Price Page'}
        fbOgDesc={'Facebook Description Seolitte Price Page'}
        fbOgImg={'https://seolitte.com/static/logo.png'}
      />
      <Breadcrumbs/>
      <div className='pages'>
        {isLoaded ?  
            <div 
                className='pages-item'
                dangerouslySetInnerHTML={{__html: items}}></div> 
        : null }  

      </div>
    </div>
  );
}

export default Price;
