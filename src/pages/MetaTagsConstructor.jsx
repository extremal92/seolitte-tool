import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function MetaTagsConstructor() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte Meta Tags Constructor'}
          description={'Seolitte Page Description Meta Tags Constructor'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Meta Tags Constructor Page'}
          googleDesc={'Google Description Seolitte Meta Tags Constructor Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Meta Tags Constructor Page'}
          fbOgDesc={'Facebook Description Seolitte Meta Tags Constructor Page'}
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

export default MetaTagsConstructor
