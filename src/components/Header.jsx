import React from 'react';
import logoPng from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const pagesTools = [
  { name:'Meta tags constructor', link:'meta-tags-constructor'}, 
  { name:'SEO Audit', link:'seo-audit'}, 
  { name:'Competitive Analysis', link:'competitive-analysis'}, 
  { name: 'Schema.org Builder', link:'schema-builder'}, 
  { name:'Broken Links Fixer', link:'broken-links-fixer'}, 
  { name:'Sitemap Builder', link:'sitemap-builder'}, 
  { name: 'SEO Activity Report', link:'seo-activity-report'} 
];

const pagesCompany = [
  { name:'About Us', link:'about-us'}, 
  { name:'Contacts', link:'contacts'}, 
  { name:'Success stories', link:'success-stories'}
];

const pagesResources = [
  { name:'Help center', link:'help-center'}, 
  { name:'Blog', link:'blog'}, 
  { name:'Whats new', link:'whats-new'},
  { name:'E-books', link:'e-books'}
];

function Header () {

  return(
    <div className="header">
      <div className="container">
        <div className="header-main">
          <div className="header__logo">
            <Link to="/" className='header-logo'>
              <img src={logoPng} alt="Logo" />
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
          </div>
        </div>
      </div>
    </div>

    )
}

export default Header;