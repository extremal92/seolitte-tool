import React from 'react';

import {Header} from './components';
import Breadcrumbs from './components/Breadcrumbs'
import {Home, Tools, Price, Features, Company, 
  Resources, MetaTagsConstructor, SeoAudit, 
  CompetitiveAnalysis, SchemaBuilder, BrokenLinksFixer, 
  SitemapBuilder, ActivityReport, AboutUs,
  Contacts, SuccessStories, HelpCenter,
  Blog, WhatsNew, Books, NotFound, Test} from './pages';

import { Route, Router,useHistory, Switch } from 'react-router-dom';
import { browserHistory } from "react-router";
// NEW



function App () {

  const isLoggin = localStorage.getItem('user');

  return(
    <div className="wrapper" id="App">

      <Header isLoggin={isLoggin}/>
      <div className='content' id="page-wrap">
        <Switch>
          <Route path="/" component={Home} exact  />

          <Route path="/tools" component={Tools} exact />
            <Route path="/tools/meta-tags-constructor" component={MetaTagsConstructor} exact />
            <Route path="/tools/seo-audit" component={SeoAudit} exact  />
            <Route path="/tools/competitive-analysis" component={CompetitiveAnalysis} exact  />
            <Route path="/tools/schema-builder" component={SchemaBuilder} exact  />
            <Route path="/tools/broken-links-fixer" component={BrokenLinksFixer} exact  />
            <Route path="/tools/sitemap-builder" component={SitemapBuilder} exact  />
            <Route path="/tools/seo-activity-report" component={ActivityReport} exact  />

          <Route path="/price" component={Price} exact />

          <Route path="/features" component={Features} exact />

          <Route path="/company" component={Company} exact />
            <Route path="/company/about-us" component={AboutUs} exact />
            <Route path="/company/contacts" component={Contacts} exact />
            <Route path="/company/success-stories" component={SuccessStories} exact />

          <Route path="/resources" component={Resources} exact />
            <Route path="/resources/help-center" component={HelpCenter} exact />
            <Route path="/resources/blog" component={Blog} exact />
            <Route path="/resources/whats-new" component={WhatsNew} exact />
            <Route path="/resources/e-books" component={Books} exact />
          <Route path="/test-page" component={Test} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}
export default App;
