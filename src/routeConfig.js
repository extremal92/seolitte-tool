import react from "react";
import {Tools, Price, Features, Company, 
    Resources, MetaTagsConstructor, SeoAudit, 
    CompetitiveAnalysis, SchemaBuilder, BrokenLinksFixer, 
    SitemapBuilder, ActivityReport, AboutUs,
    Contacts, SuccessStories, HelpCenter,
    Blog, WhatsNew, Books} from './pages'; 

const routesConfig = [
  {
    path: "/tools",
    component: {Tools}
  },
  {
    path: "/tools/meta-tags-constructor",
    component: {MetaTagsConstructor}
  },
  {
    path: "/tools/seo-audit",
    component: {SeoAudit}
  },
  {
    path: "/tools/competitive-analysis",
    component: {CompetitiveAnalysis}
  },
  {
    path: "/tools/schema-builder",
    component: {SchemaBuilder}
  },
  {
    path: "/tools/broken-links-fixer",
    component: {BrokenLinksFixer}
  },
  {
    path: "/tools/sitemap-builder",
    component: {SitemapBuilder}
  },
  {
    path: "/tools/seo-activity-report",
    component: {ActivityReport}
  },
  {
    path: "/price",
    component: {Price}
  },
  {
    path: "/features",
    component: {Features}
  },
  {
    path: "/company",
    component: {Company}
  },
  {
    path: "/company/about-us",
    component: {AboutUs}
  },
  {
    path: "/company/contacts",
    component: {Contacts}
  },
  {
    path: "/company/success-stories",
    component: {SuccessStories}
  },
  {
    path: "/resources",
    component: {Resources}
  },
  {
    path: "/resources/help-center",
    component: {HelpCenter}
  },
  {
    path: "/resources/blog",
    component: {Blog}
  },
  {
    path: "/resources/whats-new",
    component: {WhatsNew}
  },
  {
    path: "/resources/e-books",
    component: {Books}
  }
];

export default routesConfig;
