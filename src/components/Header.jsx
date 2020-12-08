import React from 'react';
import logoPng from '../assets/img/SAO_Logo_Color.png';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Cabinet from './Cabinet';
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../redux/actions/user.actions';



const pagesTools = [
  { name:'Meta tags constructor', link:'/tools/meta-tags-constructor'}, 
  { name:'SEO Audit', link:'/tools/seo-audit'}, 
  { name:'Competitive Analysis', link:'/tools/competitive-analysis'}, 
  { name: 'Schema.org Builder', link:'/tools/schema-builder'}, 
  { name:'Broken Links Fixer', link:'/tools/broken-links-fixer'}, 
  { name:'Sitemap Builder', link:'/tools/sitemap-builder'}, 
  { name: 'SEO Activity Report', link:'/tools/seo-activity-report'} 
];

const pagesCompany = [
  { name:'About Us', link:'/company/about-us'}, 
  { name:'Contacts', link:'/company/contacts'}, 
  { name:'Success stories', link:'/company/success-stories'}
];

const pagesResources = [
  { name:'Help center', link:'/resources/help-center'}, 
  { name:'Blog', link:'/resources/blog'}, 
  { name:'Whats new', link:'/resources/whats-new'},
  { name:'E-books', link:'/resources/e-books'}
];

function Header () {

  const dispatch = useDispatch();
  const isLogged = useSelector(({ authentication }) => authentication.loggedIn);
  React.useEffect(() => {
    dispatch(userActions.getAll());
  }, [dispatch]);

  return(
    <div className="header">
      <div className="container">
        <div className="header-main">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} pagesTools={pagesTools} pagesCompany={pagesCompany} pagesResources={pagesResources}/>
          <div className="header__logo">
            <Link to="/" className='header-logo'>
              <img src={logoPng} alt="SAO-Logo" />
            </Link>
          </div>
          <div className='navList'>
            <div className='navList-item dropdown'>
              <Link to="/tools" 
                className='navList-item-link dropdown-toggle'>
                <span>Tools</span>  
              </Link>
              <div 
                className="navList-popup dropdown-menu"
                aria-labelledby="dropdownMenuButton">
                  { pagesTools && pagesTools.map((item, key)=>(
                    <Link 
                      to={item.link} 
                      className='navList-item-link dropdown-item'
                      key={`${item.name}_${key}`}>
                      <span>{item.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
            <div className='navList-item'>
              <Link to="/price" className='navList-item-link'>
                <span>Price</span>  
              </Link>
            </div>
            <div className='navList-item'>
              <Link to="/features" className='navList-item-link'>
                <span>Features</span>  
              </Link>
            </div>
            <div className='navList-item dropdown'>
              <Link to="/company" 
                className='navList-item-link dropdown-toggle'>
                <span>Company</span>  
              </Link>
              <div 
                className="navList-popup dropdown-menu"
                aria-labelledby="dropdownMenuButton">
                  { pagesCompany && pagesCompany.map((item, key)=>(
                    <Link 
                      to={item.link} 
                      className='navList-item-link dropdown-item'
                      key={`${item.name}_${key}`}>
                      <span>{item.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
            <div className='navList-item dropdown'>
              <Link to="/resources" 
                className='navList-item-link dropdown-toggle'>
                  <span>Resources</span>  
              </Link>
              <div 
                className="navList-popup dropdown-menu"
                aria-labelledby="dropdownMenuButton">
                  { pagesResources && pagesResources.map((item, key)=>(
                    <Link 
                      to={item.link} 
                      className='navList-item-link dropdown-item'
                      key={`${item.name}_${key}`}>
                      <span>{item.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
            { isLogged ?  
              <div className='navList-item'>
                <Link to="/test-page" className='navList-item-link'>
                  <span>TestPage</span>  
                </Link>
              </div> 
            : null }
          </div>
          <Cabinet />
        </div>
      </div>
    </div>

    )
}

export default Header;