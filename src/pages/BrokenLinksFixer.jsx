import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function BrokenLinksFixer() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte BrokenLinksFixer'}
          description={'Seolitte Page Description BrokenLinksFixer'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte BrokenLinksFixer Page'}
          googleDesc={'Google Description Seolitte BrokenLinksFixer Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte BrokenLinksFixer Page'}
          fbOgDesc={'Facebook Description Seolitte BrokenLinksFixer Page'}
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

export default BrokenLinksFixer;
