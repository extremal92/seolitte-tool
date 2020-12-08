import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function SuccessStories() {
    
    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte Success Stories'}
          description={'Seolitte Page Description Success Stories'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Success Stories Page'}
          googleDesc={'Google Description Seolitte Success Stories Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Success Stories Page'}
          fbOgDesc={'Facebook Description Seolitte Success Stories Page'}
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

export default SuccessStories;
