import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default props => {
  return (
    <div className='sidebar-menu'>
        <Menu {...props}>
            <Link to="/tools" className="menu-item">
                Tools  
            </Link>
            { props.pagesTools && props.pagesTools.map((item, key)=>(
                <Link 
                    to={item.link} 
                    className="menu-item-sub"
                    key={`${item.name}_${key}`}>
                        {item.name}
                </Link>
            ))}
            <Link to="/price" className="menu-item">
                Price 
            </Link>

            <Link to="/features" className="menu-item">
                Features
            </Link>
            <Link to="/company" className="menu-item">
                Company
            </Link>
            { props.pagesCompany && props.pagesCompany.map((item, key)=>(
                <Link 
                    to={item.link} 
                    className="menu-item-sub"
                    key={`${item.name}_${key}`}>
                        {item.name}
                </Link>
            ))}
            <Link to="/resources" className="menu-item">
                Resources 
            </Link>
                { props.pagesResources && props.pagesResources.map((item, key)=>(
                <Link 
                    to={item.link} 
                    className="menu-item-sub"
                    key={`${item.name}_${key}`}>
                        {item.name} 
                </Link>
                ))}
        </Menu>
    </div>
  );
};
