import React from 'react';

import {Header} from './components';
import {Home, Tools, Price, Features, Company, 
  Resources, MetaTagsConstructor, SeoAudit, 
  CompetitiveAnalysis, SchemaBuilder, BrokenLinksFixer, 
  SitemapBuilder, ActivityReport, AboutUs,
  Contacts, SuccessStories, HelpCenter,
  Blog, WhatsNew, Books} from './pages';
import { Route, Link } from 'react-router-dom';


function App () {

  return(
    <div className="wrapper">
      <Header/>
      <div className='content'>
        <Route path="/" component={Home} exact  />

        <Route path="/tools" component={Tools} exact />
          <Route path="/meta-tags-constructor" component={MetaTagsConstructor} exact  />
          <Route path="/seo-audit" component={SeoAudit} exact  />
          <Route path="/competitive-analysis" component={CompetitiveAnalysis} exact  />
          <Route path="/schema-builder" component={SchemaBuilder} exact  />
          <Route path="/broken-links-fixer" component={BrokenLinksFixer} exact  />
          <Route path="/sitemap-builder" component={SitemapBuilder} exact  />
          <Route path="/seo-activity-report" component={ActivityReport} exact  />

        <Route path="/price" component={Price} exact />

        <Route path="/features" component={Features} exact />

        <Route path="/company" component={Company} exact />
          <Route path="/about-us" component={AboutUs} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/success-stories" component={SuccessStories} exact />

        <Route path="/resources" component={Resources} exact />
          <Route path="/help-center" component={HelpCenter} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/whats-new" component={WhatsNew} exact />
          <Route path="/e-books" component={Books} exact />

      </div>
    </div>
  )
}
export default App;
