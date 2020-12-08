import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function SitemapBuilder() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte Sitemap Builder'}
          description={'Seolitte Page Description Sitemap Builder'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Sitemap Builder Page'}
          googleDesc={'Google Description Seolitte Sitemap Builder Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Sitemap Builder Page'}
          fbOgDesc={'Facebook Description Seolitte Sitemap Builder Page'}
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

export default SitemapBuilder;
