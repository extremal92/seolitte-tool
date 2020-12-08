import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop, configureAnchors } from 'react-scrollable-anchor';
import { useSelector, useDispatch } from 'react-redux'
import ReactApexChart from 'react-apexcharts'

import { fetchChart } from '../redux/actions/chart';

import imgOG from '../assets/img/pngwing.png';
import { Breadcrumbs, MetaTags } from '../components';


configureAnchors({ offset: -15, scrollDuration: 800});

const sideBar = [
    { name:'Content', link:'content', section:'#content'}, 
    { name:'Indexing', link:'indexing', section:'#indexing'}, 
    { name:'Mobile', link:'mobile', section:'#mobile'}, 
    { name:'Security', link:'security', section:'#security'}, 
    { name:'Structured Data', link:'structured', section:'#structured'}, 
    { name:'Branding', link:'branding', section:'#branding'}, 
    { name:'Performance', link:'performance', section:'#performance'}, 
    { name:'Tehnologies', link:'tehnologies', section:'#tehnologies'}, 
    { name:'Social Linking', link:'social', section:'#social'}, 
]

function ActivityReport() {

    const dispatch = useDispatch();
    const sortRef = React.useRef();

    const items = useSelector(({ chart }) => chart.items);
    const isLoaded = useSelector(({ chart }) => chart.isLoaded);

    React.useEffect(() => {
        dispatch(fetchChart());
    }, [dispatch]);

    const { options, series } = items;

    return (
        <div className='container'>
            <MetaTags 
                title={'SeoLitte ActivityReport'}
                description={'Seolitte Page Description ActivityReport'}
                canonical={'https://seolitte.com/'}
                googleName={'Google Name Seolitte ActivityReport Page'}
                googleDesc={'Google Description Seolitte ActivityReport Page.'}
                fbOgUrl={'https://seolitte.com'}
                fbOgTitle={'Facebook Title Seolitte ActivityReport Page'}
                fbOgDesc={'Facebook Description Seolitte ActivityReport Page'}
                fbOgImg={'https://seolitte.com/static/logo.png'}
            />
            <Breadcrumbs/>
            <div className='row report'>
                <div className='col-9 report-main'>
                    <div className='report-info'>
                        <div className='report-info-details'>
                            <div className='report-info-image'>
                                <img src={imgOG} alt=""/>
                            </div>
                            <div className='report-info-block'>
                                <h4>Site Title</h4>
                                <div className='report-info-block-date'>
                                    <span>July 31, 2020 11:20AM</span>
                                </div>
                                <div className='report-info-block-schedule'>

                                    <div className='schedule-item'>
                                        <div className='schedule-item-icon schedule-item-icon--green'>
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                        </div>
                                        <div className='schedule-item-status'>
                                            <span>Passed</span>
                                        </div>
                                        <div className='schedule-item-progress'>
                                            <div 
                                                className='schedule-item-progress-line schedule-item-progress-line--green'
                                                style={{ width: '15.4%' }}>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='schedule-item'>
                                        <div className='schedule-item-icon schedule-item-icon--orange'>
                                            <i className="fa fa-exclamation" aria-hidden="true"></i>
                                        </div>
                                        <div className='schedule-item-status'>
                                            <span>To improve</span>
                                        </div>
                                        <div className='schedule-item-progress'>
                                            <div 
                                                className='schedule-item-progress-line schedule-item-progress-line--orange'
                                                style={{ width: '50%' }}>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='schedule-item'>
                                        <div className='schedule-item-icon schedule-item-icon--red'>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </div>
                                        <div className='schedule-item-status'>
                                            <span>Errors</span>
                                        </div>
                                        <div className='schedule-item-progress'>
                                            <div 
                                                className='schedule-item-progress-line schedule-item-progress-line--red'
                                                style={{ width: '14.6%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='report-info-chart'>
                            {isLoaded ? <ReactApexChart options={options} series={series} type={options.chart.type} width={options.chart.width}/> : null }
                        </div>
                    </div>
                    <ScrollableAnchor id={'content'}>
                        <div className='content report-item'>
                            <div className='page-sub-title'>
                                <h3>Content</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Title </th>
                                        <th scope="col">Meta Description </th>
                                        <th scope="col">Headings </th>
                                        <th scope="col">Content analysis </th>
                                        <th scope="col">Images </th>
                                        <th scope="col">In-page links </th>
                                        <th scope="col">Language </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'indexing'}>
                        <div className='indexing report-item'>
                            <div className='page-sub-title'>
                                <h3>Indexing</h3>
                            </div>
                            <div className='table-responsive'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Crawl vs. Index Status </th>
                                            <th scope="col">Use of meta robots tags </th>
                                            <th scope="col">URL indexing </th>
                                            <th scope="col">Robots </th>
                                            <th scope="col">Sitemap </th>
                                            <th scope="col">Broken links </th>
                                            <th scope="col">Clean url </th>
                                            <th scope="col">Discovered pages </th>
                                            <th scope="col">2xx </th>
                                            <th scope="col">3xx </th>
                                            <th scope="col">4xx </th>
                                            <th scope="col">5xx </th>
                                            <th scope="col">Pagination </th>
                                            <th scope="col">Canonicals </th>
                                            <th scope="col">Redirect chains </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'mobile'}>
                        <div className='mobile report-item'>
                            <div className='page-sub-title'>
                                <h3>Mobile</h3>
                            </div>
                            <div className='table-responsive'>
                                <table className="table table-sm ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mobile friendliness </th>
                                            <th scope="col">Mobile rendering </th>
                                            <th scope="col">Tap buttons </th>
                                            <th scope="col">Plugins </th>
                                            <th scope="col">Font </th>
                                            <th scope="col">Viewport </th>
                                            <th scope="col">AMP </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                            <td> Test text </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'security'}>
                        <div className='security report-item'>
                            <div className='page-sub-title'>
                                <h3>Security</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Emails </th>
                                        <th scope="col">SSL </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'structured'}>
                        <div className='structured-data report-item'>
                            <div className='page-sub-title'>
                                <h3>Structured Data</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Schema  </th>
                                        <th scope="col">OG </th>
                                        <th scope="col">Mixed content </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'branding'}>
                        <div className='branding report-item'>
                            <div className='page-sub-title'>
                                <h3>Branding</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">URL(shorter=better)</th>
                                        <th scope="col">Favicon </th>
                                        <th scope="col">404 page </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'performance'}>
                        <div className='performance report-item'>
                            <div className='page-sub-title'>
                                <h3>Performance</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Asset Cacheability </th>
                                        <th scope="col">Asset Compression </th>
                                        <th scope="col">Asset Minification </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'tehnologies'}>
                        <div className='tehnologies report-item'>
                            <div className='page-sub-title'>
                                <h3>Tehnologies</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Server IP </th>
                                        <th scope="col">Technologies use for site </th>
                                        <th scope="col">Analytics </th>
                                        <th scope="col">Doctype </th>
                                        <th scope="col">Encoding </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'social'}>
                        <div className='social-linking  report-item'>
                            <div className='page-sub-title'>
                                <h3>Social Linking</h3>
                            </div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Facebook </th>
                                        <th scope="col">Twitter </th>
                                        <th scope="col">Instagram </th>
                                        <th scope="col">Linkedin </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                        <td> Test text </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ScrollableAnchor>
                </div>
                <div className='col-3 report-sidebar'>
                    <div className='sidebar'>
                        <ul className='sidebar-list list-group'>
                        <li className='sidebar-list_item list-group-item'>
                            <a onClick={goToTop}> <i className="fa fa-angle-up" aria-hidden="true"></i> Return to top</a>
                        </li>
                        { sideBar && sideBar.map((item, key)=>(
                            <li className='sidebar-list_item list-group-item' key={key}>
                                <a href={item.section} >{item.name}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityReport;
