import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumbs,MetaTags } from '../components';
import { fetchPages } from '../redux/actions/pages';

function Features() {

    const dispatch = useDispatch();
    const items = useSelector(({ pages }) => pages.items.features);
    const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
    React.useEffect(() => {
      dispatch(fetchPages());
    }, [dispatch]);
  
    
    return (
        <div className='container'>
            <MetaTags 
                title={'SeoLitte Features'}
                description={'Seolitte Page Description Features'}
                canonical={'https://seolitte.com/'}
                googleName={'Google Name Seolitte Features Page'}
                googleDesc={'Google Description Seolitte Features Page.'}
                fbOgUrl={'https://seolitte.com'}
                fbOgTitle={'Facebook Title Seolitte Features Page'}
                fbOgDesc={'Facebook Description Seolitte Features Page'}
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
    )
}

export default Features;
