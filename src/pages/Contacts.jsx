import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function Contacts() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.tools);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    return (
      <div className='container'>
        <MetaTags 
          title={'SeoLitte Contacts'}
          description={'Seolitte Page Description Contacts'}
          canonical={'https://seolitte.com/'}
          googleName={'Google Name Seolitte Contacts Page'}
          googleDesc={'Google Description Seolitte Contacts Page.'}
          fbOgUrl={'https://seolitte.com'}
          fbOgTitle={'Facebook Title Seolitte Contacts Page'}
          fbOgDesc={'Facebook Description Seolitte Contacts Page'}
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

export default Contacts
