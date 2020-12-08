import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs, MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function Blog() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte Blog'}
          description={'Seolitte Page Description Blog'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Blog Page'}
          googleDesc={'Google Description Seolitte Blog Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Blog Page'}
          fbOgDesc={'Facebook Description Seolitte Blog Page'}
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

export default Blog
