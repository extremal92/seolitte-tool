import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

const PureBreadcrumbs = ({ breadcrumbs }) => (

  <div className={`${breadcrumbs.length > 1 ? '' : 'd-none'}`}>
    <div className='breadcrumbs'>
      {breadcrumbs && breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div className={`breadcrumbs__item ${index < breadcrumbs.length - 1 ? '' : 'active'}`} key={match.url}>
            <Link to={match.url || ""} className="breadcrumbs__item-link">{breadcrumb}</Link>
            <span className="breadcrumbs__item-arrow">{index < breadcrumbs.length - 1 && ">"}</span>
          </div>
      ))}
    </div>
    { breadcrumbs && breadcrumbs.map(({ breadcrumb }, index)=>(
        index < breadcrumbs.length - 1 ? '' : 
          <div className="pages__title" key={breadcrumb}><h1>{breadcrumb}</h1></div>
    ))}
  </div>
);


export default withBreadcrumbs()(PureBreadcrumbs);
