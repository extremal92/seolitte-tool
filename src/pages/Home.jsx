import React from 'react'
import { Formik, Field, Form } from 'formik';
import Iframe from 'react-iframe';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import {LightSpeed, Bounce, Zoom, Fade} from 'react-reveal';


import wu1 from '../assets/img/who_use_1.svg'
import wu2 from '../assets/img/who_use_2.svg'
import wu3 from '../assets/img/who_use_3.svg'

// const { useState, useEffect } = React
// const { AnimateOnChange, HideUntilLoaded } = ReactAnimation
import AnimateOnChange from 'react-animate-on-change'

function Home() {

  const submitForm = ( values, setSubmitting ) => {

    setTimeout(() => {
      alert(JSON.stringify(values))
      setSubmitting(false);
    }, 100);
    
  }

  const submitFormSubs = ( values, setSubmitting ) => {

    setTimeout(() => {
      alert(JSON.stringify(values))
      setSubmitting(false);
    }, 100);
    
  }

  const words = [
    'Marketing',
    'Content Marketing',
    'SEO',
    'PPC',
    'Domain and keyword analysis'
  ]

  const [current, setCurrent] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 4000);
    return (() => {
      clearInterval(interval)
    })
  })


  return (

      <div className="home">
        {/* <div className='container'>

          
        </div> */}
        <div className='start'>
          <div className='container'>
            <div>

            </div>
            <Bounce>
            <div className='start-main'>
              <div className='start-text'>
                <h1>The growth hacking tool for</h1>
                <h1>
                  <AnimateOnChange>
                      {words[current]}
                  </AnimateOnChange>
                </h1>
                <h6>Start using Seolitte, it’s free!</h6>
              </div>
              <div className='start-form'>
              <Formik
                    initialValues={{
                        link: "",
                        platform: ""
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        submitForm(values, setSubmitting)
                    }}>

                    {({ isSubmitting }) => (

                    <Form>
                      <div className="form__item">
                          <label htmlFor="link" className="form__item-label"></label>
                          <Field 
                              name="link" 
                              placeholder="Enter a domain, keyword or link" 
                              type="text"  
                              className="form__item-input form__item-input--link"
                            />
                      </div>
                      <div className="form__item">
                          <label htmlFor="platform" className="form__item-label"></label>
                          <Field
                            name="platform"
                            placeholder=""
                            type="text" 
                            className="form__item-input"
                          />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="form__item-btn">Search</button>

                    </Form>

                    )}

                </Formik>
              </div>
              <div className='start-companies'>
                <span>Companies we are proud to call our clients</span>
              </div>
            </div>
            </Bounce>
          </div>
        </div>


        <div className='container offers'>

          <div className='page-title-center'>
            <h3>See what's inside</h3>
          </div>

          <nav>
            <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-seo-tab" data-toggle="tab" href="#nav-seo" role="tab" aria-controls="nav-home" aria-selected="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="72"><g fill="none" fillRule="evenodd" stroke="#CBD1D3" strokeWidth="2" transform="translate(10 11)"><circle cx="15.507" cy="19" r="3"/><circle cx="40.001" cy="6" r="3"/><circle cx="65" cy="3" r="3"/><path d="M11.481 27.005l8-.01a4 4 0 014.005 3.994l.031 23.032a1 1 0 01-.998 1.001l-14 .02a1 1 0 01-1.002-1l-.03-23.032a4 4 0 013.994-4.005zM60.97 11.038l8-.011a4 4 0 014.006 3.994l.052 39a1 1 0 01-.998 1.002l-14 .019a1 1 0 01-1.002-1l-.052-39a4 4 0 013.995-4.004z"/><path fill="#EEF0F1" fillRule="nonzero" d="M48.029 55.023l-14 .019a1 1 0 01-1-1l-.052-35a4.011 4.011 0 013.994-4l8-.011a4.013 4.013 0 014.006 3.995l.052 35a1 1 0 01-1 .997z"/><path fill="#FFF" fillRule="nonzero" d="M18 17L38 7m5-2l19-2"/><path fill="#EEF0F1" fillRule="nonzero" strokeLinecap="round" d="M0 60h80"/></g></svg>
                <span>SEO</span>
              </a>
              <a className="nav-item nav-link" id="nav-ppc-tab" data-toggle="tab" href="#nav-ppc" role="tab" aria-controls="nav-ppc" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="72"><g fill="none" fillRule="evenodd" transform="translate(17 14)"><path fill="#EEF0F1" fillRule="nonzero" d="M1.8 41.29l19.552-8.732S44.945 23.022 36.5 4.121l15.46 32.142-26.955 2.657-13.687 6.113c-3.148.733-7.127-1.568-9.518-3.743z"/><path fill="#F0F1F2" fillRule="nonzero" d="M47.83 11.834l5.821 13.035s6.157-1.968 3.316-10.08c-1.816-2.316-2.689-4.271-9.137-2.955z"/><path stroke="#CBD1D3" strokeWidth="2" d="M24.849 38.255l-12.686 5.922a8 8 0 11-6.768-14.5l12.686-5.922 6.768 14.5z"/><path stroke="#CBD1D3" strokeWidth="2" d="M24.849 38.255l26.68-1.617a4.606 4.606 0 003.728-6.53L43.472 4.863a3.847 3.847 0 00-6.266-1.036l-19.125 19.93m33.651 12.984L36.504 4.121M19.412 40.793l4.23 9.062a5.019 5.019 0 01-2.415 6.645 5.016 5.016 0 01-6.646-2.415L10.245 44.8"/><path stroke="#CBD1D3" strokeLinecap="round"  strokeWidth="2" d="M15.908 38.015l-6.343 2.961"/><circle cx="18.819" cy="36.661" r="1" fill="#CCD1D3" fillRule="nonzero"/><path stroke="#CBD1D3" strokeWidth="2" d="M46.607 11.577a7.486 7.486 0 016.319 13.538"/><path stroke="#CBD1D3" strokeLinecap="round"  strokeWidth="2" d="M58.977.252l-4.651 6.585m10.887 4.806l-5.268 2.503m9.607 8.759l-8.035-.664"/></g></svg>
                <span>PPC</span>
              </a>
              <a className="nav-item nav-link" id="nav-social-tab" data-toggle="tab" href="#nav-social" role="tab" aria-controls="nav-social" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="72"><g fill="none" fillRule="evenodd" transform="translate(13 10)"><path stroke="#CBD1D3" strokeWidth="2" d="M41.584 17c6.335.03 11.445 5.19 11.416 11.524V41.1a11.48 11.48 0 01-10.378 11.467v5.64a2.758 2.758 0 01-4.714 1.97l-7.489-7.558h-19C5.085 52.59-.027 47.434 0 41.1V28.524C-.03 22.189 5.081 17.03 11.416 17h30.168z"/><path stroke="#FFF" strokeWidth="8" d="M70.431 20H57.4a.2.2 0 01-.194-.228l1.356-8.143a8.869 8.869 0 00-.645-5.065l-1.957-4.4A3.636 3.636 0 0052.637 0h-1A3.637 3.637 0 0048 3.637V10l-8.285 9.2A2.79 2.79 0 0039 21.069V42.2a3.8 3.8 0 003.8 3.8h16.82a10.74 10.74 0 0010.025-6.885l4.994-12.984A4.512 4.512 0 0070.431 20z"/><path fill="#FFF" fillRule="nonzero" stroke="#CBD1D3" strokeWidth="2" d="M70.431 20H57.4a.2.2 0 01-.194-.228l1.356-8.143a8.869 8.869 0 00-.645-5.065l-1.957-4.4A3.636 3.636 0 0052.637 0h-1A3.637 3.637 0 0048 3.637V10l-8.285 9.2A2.79 2.79 0 0039 21.069V42.2a3.8 3.8 0 003.8 3.8h16.82a10.74 10.74 0 0010.025-6.885l4.994-12.984A4.512 4.512 0 0070.431 20z"/><path fill="#FFF" fillRule="nonzero" stroke="#CBD1D3" strokeLinecap="round" strokeWidth="2" d="M8 30h12M8 37h7"/><rect width="8" height="23" x="27" y="22" fill="#EEF0F1" fillRule="nonzero" stroke="#CBD1D3" strokeWidth="2" rx="2"/></g></svg>
                <span>Social Media</span>
              </a>
              <a className="nav-item nav-link" id="nav-content-tab" data-toggle="tab" href="#nav-content" role="tab" aria-controls="nav-content" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="72"><g fill="none" fillRule="evenodd" transform="translate(13 14)"><path fill="#EEF0F1" fillRule="nonzero" d="M2.367 1h66.266A2.207 2.207 0 0171 3v8H0V3a2.207 2.207 0 012.367-2z"/><rect width="71" height="52" y="1" stroke="#CBD1D3" strokeWidth="2" rx="4"/><path fill="#FFF" fillRule="nonzero" stroke="#CBD1D3" strokeLinecap="round" strokeWidth="2" d="M7 6h24M7 21h31M7 27h17M7 33h22M60 6h4"/><path stroke="#FFF" strokeWidth="4" d="M44.505 35.64l-.247-3.075a4 4 0 014.306-4.307l3.076.247a4 4 0 012.508 1.158l17.994 17.994a4 4 0 010 5.657l-2.828 2.828a4 4 0 01-5.657 0L45.663 38.149a4 4 0 01-1.158-2.509z"/><path fill="#FFF" fillRule="nonzero" stroke="#CBD1D3" strokeWidth="2" d="M46.5 35.48l-.246-3.075a2 2 0 012.153-2.153l3.075.246a2 2 0 011.254.58L70.728 49.07a2 2 0 010 2.828L67.9 54.727a2 2 0 01-2.828 0l-3.014-3.014-14.98-14.98a2 2 0 01-.579-1.254l.001.001z"/><path fill="#FFF" fillRule="nonzero" stroke="#CBD1D3" strokeLinecap="round" strokeWidth="2" d="M62.025 50.975l4.95-4.95M49.44 35.56l2.12-2.12"/></g></svg>
                <span>Content Marketing</span>
              </a>
              <a className="nav-item nav-link" id="nav-market-tab" data-toggle="tab" href="#nav-market" role="tab" aria-controls="nav-market" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="72"><g fill="none" fillRule="evenodd" strokeWidth="2" transform="translate(19 12)"><path stroke="#CBD1D3" d="M1.21 18.14a3.955 3.955 0 011.54-.11c.193.026.383.066.57.12A4 4 0 012.25 26a.86.86 0 01-.16-.01.277.277 0 01-.09-.01M2.34 30a10.473 10.473 0 004.8-1.21 16.045 16.045 0 014.34 5.55A2.5 2.5 0 019.27 38H5.23"/><circle cx="26" cy="22" r="4" fill="#EEF0F1" fillRule="nonzero" stroke="#CBD1D3"/><path fill="#EEF0F1" fillRule="nonzero" stroke="#CBD1D3" d="M30.38 30a10.656 10.656 0 01-9.76 0 15.757 15.757 0 00-4.338 5.422 2.403 2.403 0 00.078 2.396A2.514 2.514 0 0018.49 39h14.02a2.514 2.514 0 002.13-1.182c.45-.73.48-1.639.078-2.396A15.757 15.757 0 0030.38 30z"/><path stroke="#CBD1D3" d="M48.63 18.02a4 4 0 10-.38 7.98c.603.004 1.2-.133 1.74-.4m1.1-6.42l-.01-.01M46.77 38h-5.54a2.5 2.5 0 01-2.21-3.66 16.045 16.045 0 014.34-5.55 10.443 10.443 0 006.32 1.11m-1.81 10.15l13.55 11.37a4 4 0 01-5.14 6.13L42.56 46.04"/><circle cx="26" cy="26" r="26" stroke="#CBD1D3"/><circle cx="26" cy="26" r="24" stroke="#FFF" strokeLinecap="round" /><path stroke="#CBD1D3" d="M55 46l-4.935 5.628"/></g></svg>
                <span>Market Research</span>
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <LightSpeed>
              <div className="tab-pane fade show active" id="nav-seo" role="tabpanel" aria-labelledby="nav-seo-tab">
                <div className="offers-item__inner">
                  <div className="offers-item__left">
                    <h3 className="offers-item__title">Complete workflow for any SEO professional</h3>
                    <ul className="offers-item__text">
                        <li><i className="fa fa-check" aria-hidden="true"></i> Run a technical SEO audit on any site</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Track your daily rankings</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Analyze any competitor’s SEO strategy</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Analyze any domain’s backlink profile</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Research millions of keyword ideas</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Gather SEO ideas for gaining more organic traffic</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Unlock your ‘not provided’ keywords</li>
                    </ul>
                  </div>
                  <div className="offers-item__img-wrap">
                      <img src="https://cdn.semrush.com/static/index/tools-new/seo.96eee7c64515.png"  alt="SEO" className="offers-item__img"/>
                  </div>
                </div>
              </div>
            </LightSpeed>
            <LightSpeed>
              <div className="tab-pane fade" id="nav-ppc" role="tabpanel" aria-labelledby="nav-ppc-tab">
                <div className="offers-item__inner">
                  <div className="offers-item__left">
                    <h3 className="offers-item__title">Improve the results of your PPC efforts</h3>
                    <ul className="offers-item__text">
                        <li><i className="fa fa-check" aria-hidden="true"></i> Uncover any domain’s paid search and GDN strategies</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Monitor your competitor’s ad copies and landing pages</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Analyze your rival’s Google Shopping campaigns</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Find keywords for a PPC campaign</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Optimize your negative keyword list</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Check out average PPC costs at a local level</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Unlock your ‘not provided’ keywords</li>
                    </ul>
                  </div>
                  <div className="offers-item__img-wrap">
                      <img src="https://cdn.semrush.com/static/index/tools-new/ppc.46f18f9d4079.png"  alt="SEO" className="offers-item__img"/>
                  </div>
                </div>
              </div>
            </LightSpeed>
            <LightSpeed><div className="tab-pane fade" id="nav-social" role="tabpanel" aria-labelledby="nav-social-tab">..3.</div></LightSpeed>
            <LightSpeed><div className="tab-pane fade" id="nav-content" role="tabpanel" aria-labelledby="nav-content-tab">..4.</div></LightSpeed>
            <LightSpeed><div className="tab-pane fade" id="nav-market" role="tabpanel" aria-labelledby="nav-market-tab">..5.</div></LightSpeed>
          </div>
          
        </div>
        <div className='video-bg'>
          <div className='container'>
            <div className='video'>
              <div className='page-title-center'>
                <h3>HOW DOES SEO WORK ?</h3>
              </div>
              <Zoom>
              <div className='video-iframe'>
                <Iframe url="https://www.youtube.com/embed/R-XxAk8-OXY"
                  frameborder="0"
                  // allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  className="video-iframe-item"/>
              </div>
              </Zoom>
            </div>
          </div>
        </div>


        <div className='features-bg'>
          <div className='container'>
            <div>
              <div className='page-title-center'>
                <h3>Who can benefit from SeoLitte?</h3>
              </div>
              <div className='features'>
                <Bounce>
                  <div className='features-item'>
                    <div className='features-item_img'>
                      <img src={wu1} alt="who use" />
                    </div>
                    <div className='features-item_title'>
                      <span>Digital Marketing Agencies</span>
                    </div>
                  </div>
                </Bounce>
                <Bounce>
                  <div className='features-item'>
                    <div className='features-item_img'>
                      <img src={wu2} alt="who use" />
                    </div>
                    <div className='features-item_title'>
                      <span>In-house SEO Teams</span>
                    </div>
                  </div>
                </Bounce>
                <Bounce>
                  <div className='features-item'>
                    <div className='features-item_img'>
                      <img src={wu3} alt="who use" />
                    </div>
                    <div className='features-item_title'>
                      <span>SMB and Enterprise</span>
                    </div>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>

        <div className='join-bg'>
          <div className='container'>
          
            <div className='join'>
              <LightSpeed left>
                <div className='join-text'>
                  <span>Join</span> 
                    <span className='join-text-number'>
                    <CountUp end={345678} redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    </span>
                    <span>professionals right now!</span>
                </div>
              </LightSpeed>
              <LightSpeed right>
                <div className='join-button'>
                  <button>Join seolitte</button>
                </div>
              </LightSpeed>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='page-title-center'>
            <h3>Blogs</h3>
          </div>
          <div className='blog'>
            <Zoom>
              <div className='blog-item'>
                <div className='blog-item-title'>
                  <h3>Watch weekly SEO tutorials</h3>
                </div>
                <a href="">
                  <div className='blog-item-image'>
                    <img src="https://insoft-im.com/wp-content/uploads/2017/10/seo.jpg"  alt="SEO" className="blog-item-image-img"/>
                  </div>
                  <div className='blog-item-info'>
                    <span>What is SEO and How Does it Work?</span>
                    <span className='blog-item-info-link'>Watch →</span>
                  </div>
                </a>
                <a href="">
                  <div className='blog-item-info'>
                    <span>How to Do Keyword Research for a NEW Website.</span>
                    <span className='blog-item-info-link'>Watch →</span>
                  </div>
                </a>
                <a href="">
                  <div className='blog-item-info'>
                    <span>Link Building for a New Website: 5 Actionable Ways to Get More Backlinks.</span>
                    <span className='blog-item-info-link'>Watch →</span>
                  </div>
                </a>
              </div>
            </Zoom>
            <Zoom>
              <div className='blog-item'>
                <div className='blog-item-title'>
                  <h3>Read “How To” SEO guides</h3>
                </div>
                <a href="">
                  <div className='blog-item-image'>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBUOEBARExAWEhASFRAWEBMQFxcXFhIWGBgYEx8ZHDQgGBolHBYVIjMhJykrOi4vGCMzOz8sQygtLisBCgoKDg0OGxAQGzAlICUtLjI3LzcvKy0uLS8rLy0xLS8tLSstLS0tLS0vLS0vLS8vKy0vLS4rLS0tLi0vLS0tLf/AABEIAIwBZwMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQMHAv/EADgQAAICAQMCBAQEBAUFAQAAAAECAAMRBBIhBTEGEyJBFFFhcQcjMoFSkaGxJDM0QtFicnOSshX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QANxEAAgIBAgMFBwMDAwUAAAAAAAECEQMEIRIxQQVRYXHwEyKBkaGxwTLR4RSi8SNCUgYWMzRi/9oADAMBAAIRAxEAPwDBTcYxAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAOJAOyuh25VHYdshWb+wknLnFc2HodeWRwBjJKsMZ7ZyJBKae6PiSSIAgCAIAkA4zJAyIBzAEA4zAPt62UgMrAnsCpBP2z3kWuZKTbpHywIOCCD8iMGE01aEouLpqmJJAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB9V1ljgf8TmUlFWzqEHN0jX9M6SuqFNPT6iuqBY2O6l0CMuGNjkDGMAgYX9WBKJuOSLUuXr11LMSzYMnEq6+qe6+jLzq3Sf/wA+oanz69TpXYq+pTChHACbdqBiwJUjPsRg+0yz0OLPUW2qvx5myPamp0zlkhFScq8OV+K/crtO/mbltI2WFT8NudlJqAJYhkUMR5i9sj9xxu0mCOKChDer5/Hu8fpueD2zq82SftZtxUq/Sr391U7ara2t93t4k6nwJptTRdqt50yohKWDaKiQGLbgfYYHIIneWfC1svXpkdm8eSLcm2ujap3vfV2qrfvtHmv3km2u8ldK1NdV9dttK31q2WpY4DjHY8H79vaGrRK5mkr8P0alviFJqrsY2ClMFUDHIrUkf7c47e3aYsWqlLU+wa27/gatbplg7OesjK3tt03dEzxD0LTV6bT7EC/maoMQDvYCpWBsYKW2KRzwcZ9u415JVk4V3Hm6CUs2m9rN78Vff6KvqVllWndfVpnSvBs3rQlbFa1NhXcDkFlQjPHfM87Twzxy+9O65q2+fLZrvPf1ebSywe5jSvk6irp77p3y2dfEsb9fowGoNCGtG1SbRRQozRQtrMG/UM4f1Zzh/oDN6T5nl2uVEhbKqOn3oFZmqZ6UzpKnLCzcysbMZ9IOCfYiWJJq6PPySms/Cstbr3aX3+DPPpJsLDpPSn1G9hjy6k821iyrtrDAMRnvxk/t+xi0uZEuLhbjzo1PQtJpgt1RSskOwcNh/Qf0kE912/1zL4JHz2sy5W4St8vLfrt32W3hLW06m42vfZdfXRRUpdFBrQbw3lnd6hnblyAeee+Z42tTTS6H2/ZjuLf+7b/HLrvfkvA+PxE0+neul7ThjdWu9TlymGNgzjlQdv2+nacaJv2m3Kt/XnXzZb2qqwNpe8ntt+L6q3V7tLfqZ3X9D0R0tmqo1H5iNWi6cHzC+5sMf4lAHO7txj3nqSnHipfc+e0kdQ4N5U/iqfjsm/wZYyS8SQIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBrfDfSls04szhiXUnaCcbvnn6YkvFx15nkanWTw5ZqLa2Vbvwv6WWltdujqsu097o6oxyAAD24YZww+hBHMh4Em34fucafX5MkscHJ3xPq3s0vzZirOq6hqBpDafhw7WCoBVXcxJJOBk8se/b9hOaV2e3bqiRoOtOuoXUajdqVBsLVWOSr71bIOeANxDdu4z9YrakRSbTkrovtd0m+haVW7y6dRpBYyIDYgUlcB1b2GRg8kEE55Mz6nMsUbSt3XcaOzsU9VN8T4UknfPZ9627vErfEmiBL6gOG5TKqgCrwFHOe/vj6zLodTbWPhrn13+x6faWj4U83HxPa6VLou8qukvSLQbxmrByME+3HabNSsjx1i52v5PO0csMct5/00/4PSdd1PpJ6W+l0lTqzB2oVqbARaylUcu2cHP+4tJjNPLwp7lWTE44faSj7vfW3p/Ux/Xtc4Wui5bSqNa1Za1BYNyVg7mTOec/t953lhkcri6VLpf5M3Z+XT+xpq3bum4pd3Ndd78jpv8AFFrIqogrdGrZbFYkgoQRxj3x2ndK2++voV49PwcO/wCni/u/YmHxvbs4rcW4x5h1l7J2Uf5Z+iKP1fxfxEnj2aNfGzr03jKxdI2jahHD+YXtZvWzOWJY+ng5Y8A/3nVO+ZQ8MG22ubT+K5GZA9sgfUyWWGj6b0TzNK+oFgVc8oGIB2b1598HnPyyJ5ebWSx5uCuXz96ny8OR7em7Ohl0/tLq96XL3LXPmr3f+Cu03VfLUIK62xuPpJAO7nDgj1Y7fbiXz0ntJOXE1/Hdvt+5mxdoeyioqMXXddb9+29cvLYhU6l0fzK2KPkkMhKYz8se01yhGUeGW5gjklGXFF0/D1y8Cz6P1G19bTddcWYP/mWHzAvpOM7uMZxxMupxqGCSxqnt49V8zZo8ryaqDyu1v4c0+XdZvxray1z/ABOmaxwMMMDgAg8DtkY4Hvz7T5/2eS5SfN+H4PqvaY0oRWyXivvZhvFPTbN9mtAB09mp1CrYpXaSrkcYOe4bnHt9Z9JpX/ppeuZ8hrV/rN+X2RQzSZRAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAN94PP+EX/vs/+pdj5HzfaX/sPyX2JXiD/S2/+MzqXIq0f/nh5mF6l0e/T82qoBOAQ6nPGeBnPb6Shpo+ixanHldRe/l6RBnJeTm6zqjtzfYdieWmSDtTj0jjtwJxkxQyqpqzvT5J6dt4Xwt+utnVd1C512PYxXvtwAO+fYTiGmxQlxRjTLcmsz5I8E5tru2/CO7w/o3v1NdNYy7EgDjP6SSR8yBkj6gS4yynwK6v+Tb+GOi1trLa9X6fKZ1UC1kPmbwynjjO1v55maebHjyqHJtXZpw6fNqdPLJu4XXD3V4dxRfiJRVXqUWls0+WQvrZ/UD6+/3Xt8p3h1Mczai7r8kZdBLSqLceHi6ddu/5mV3D5y8oTTPnzV/iH8xAtH0rA9iD/WCSX0tmFmAhfIYFQMkr3OOeO3f+/aU5sTyRpcyzDqYaeXHP9PJ/H9/SZo9P1F9OG8uqu1N9F9oVw5UKwJUDPuqLj5d8cznHpGl71Nrk/Xic5O18c5VHigpdHsm+teFUlyK3xjZUdUUpusvrqrrqGoscWPaRlizNgZOX29uyiWw5CfMpJ2ciAbjw9+Hl2opr1K3UqLU3qGDqyj37rjPI5GfeUx1Ed/B18mM2lk3GKrdX8Glzrz5Hf4k8DaujSs76qt6qFe3yg1j9852gKADwctgd5Dzx2dc3XzJxabInKN7JX3La7q/LkYCXkCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAWHQeqDS3C5qKr1CsPJtGUO4Yzj5ictWqCq7aLHpOhGpoZa6b7bgSSKqms25bKjPsuAP6zFk/qFnuNcPi/weli/o3peGafH4LfntvXKvyS9WLq3pbXqRZ+sblxtrdQQVBGNqk4b5EfvI1ntZ8Si9mtvPqvN9COyselwxg63T367Vs/JW77nuS16HV1HVbEvSrbTuazG5Sd4AXIPfn+onHZkckMT40+ex32/nxPPD2TjdO3e3hur3KzxH4SbSPtS5blFRtZwpUDG87RjPOK3POO09Kzxsc3JtbbVydre/2M3JLS68Gaw0a6q8BTs8xsM4rHFTZyT24kNWqKsrqNro19/A2VeosOp1V7NQptDvSotrci87EUWFsejOAcc8zNm0kMklJp7bfAv0faz0+JwUlu2+T5u34bUUurvuPquqr1DMorzS+xM2FSAPSRYcYJGV/UPvOMWmljclj2v4vz8DVqNbh1EceTP73A7vdJbq1T58uu3Q7elut+prIqNapZp8h6x6v8Qq4Bz7c88ydFpsmGE1kd2Z+2O0MGpy4XhVb108GuVmybT6zP6NR3/hf/AInof6Xh9D5dvW//AH/cYL8SEcaikOGD/CrkMCG/1F+M557Ylbq3R7Wj9p7Fe0u9+fPn4nP4e9Kq1J1IttNSiqtfMBAI8wv29J/gkcUltFczrUY8UkpZZUou/BvxN3X4M0jil/jbz5VRqVlVOUBxtYiv1Y+vMoln9lJp/k0rTR1uH3Wmu/bmvOuR5b4r6Qmi1dmlRiyLt2swAOCoPOPvLoy4lYlHhdMqZ0QIB6H4fpRtMpfO1aaDgAZJ24HJHpHPP7T5vFo1q9Xlxt0rb6Xs3+59Lru1X2Z2dg1EYcT4VHrStJ715I6+vV7KbqwOBW7cgBhuqzg/YGZoYvYayOFO0pr8G/8AqP6vs2WqcXFyxPbu2fqzz+fWHxZzJAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBxkQRZ903MjB0Yq45DKxVh9iORIFlhT17UqSWsNhZPLzYWsIXnhSTx3MUjmcFL5NfB/4NH4a8XU0WeWKnr0wXbVUreY297FZ2dm752gewAA+pMbJNs5zQlkcVBde+ubXeW/UdZ8axalQlLItAe9lrDOXtqATglstdjO0jII+3PGqT+JMME4ucX5c75X3V3mQ8XaZltFgrQVkIotrcWK52BgSR2JUggEDI5GRLHNSexXpsE8MOGbv18yv6LUWvUD5WE+3ArYt/TMXW5bkg5xcV6rc1F9VyHTu1DfnrTdV+dTyGeplz6uMlB/7fSQ88E9/szJHszPKD4aqu/wa6+ZU9VezQauyhq6msragB29RGypNu0qeARgkfWITtJ0XZdGn7jk635bJ3vydka7r9rIayleGRkPD9mfce7fOduTKo6GEZKVvZ306Ku4lV+LLAllZ0uhYW53M2nO4ZrCeghht4A7e+TKuBHocbKzqvUm1DK7V01lUVPy0KAhexbk5P1kpUct2X3gDqOkpOoTVXeSrigq2xnyUNmR6Rx+sSeJxdoz6jTrPDgbrl9D0SnxP0nTKtVurwR6sPprQSH9Q7r2IM4lKUnaRGHSQxQUG7rw7zy/x31GnU6+2+ht1TbNrYK5woHYiTBNLc1SavYoJ2ciAbzoNhNFbIzAhFXI3KcqoBx+4IngT7KzZM058Sjbdb7u34Huv/qTS6bBjw+znkailKo2k0ls7pN9dtvE7fFOss+FXz1YKa7aqrfLY7+DhWYDBxg4zj3lWLR6r20ONJqLW9rdWnfO3ty2NmTtPQz0uV4pNOal7rUlUqaaqqTvnvzR59Poz5YSQIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgHy/Y/aCGbzxarCxL/AIdUrXQabO10J9edrN25/n2mN4Z5I8+T9fM2LW4NPlUGm+JbbeuXqjP9T09radbvJZauH8wshGHICjvkE7lwO+DntJwYnCbbZ3qdTHLBJRa3voUs1mE+X7HHfBgHoa16o26byqa20/xtOH+H07/4dfI+Gbcy7s7GvIbOcs8p2SZbcrRXaivUjQ/4iqtE+Gs3EUUVYZdUPIAKKMctbgDjlvrOtuLY534dyq8FpSddUL9nlk4Ie16VJPAGUBJJzgL2bseDJndbEQ5mj8WaTQLriunb8lrUW4Nk1CwXnfWhLZByXygACgTPLM4xcVz+qVc/I0R0ftMkcktkn1Wze3urxfx8St/EXS6Su2r4VaVVkcv5TbgTuXBb1HnkyNLNy4rd8ut9/mWa3GocNRrn0ru8EZOazCIAkgldLsRbV30LeD6RU1jVgluFyV54JEhhG41HVq0fclgWxq9b+Z8DU526bT3IFG6zhA9bMEGBhUXj1E1KJbxIoPElGnsT4mgBWxVYyilaV2XbgOFYjctiOOwyGXuQSeo3yZxKuaM5LDk4JkA1XR670rrSnUadhYosPqLmnJxtdeMMeDyfnwO5z59dHTJcS3b2GLsNdoZHK6UVv/PpeZL8deIb7Ka+nOlSpU5bfUDsuAyFcBjuTHryMnO7OeJoeNxlbKNNnxZMdYuSdevPn4mLkl4gCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBxALu3rRvA8/G5NPVQDt3lhWzlcg8ZwwHtnGcj3hRVNd5Vl43OEoq6fw+Pr4d200fRNQKPIS8eQ6ONjJuwLUB4y/GFztHYbjwckzz1rMddb8l9d/merLs/VcX+xLr70u+nXufIy9XRqXXUqatUbUbbprKqLGrd0Qhq7NqsO4XnIOW5xzjVjmnFNPZ9/Pcy5YSjKUZpJrba2tvNJvxdW2QzpfKHm+SNiLU62sWO99y5V1z2JLAjAIxM0NQ5ZFHi3tpx7kr3v5dd7N+XSqOJz4PdUYtSt7t1tV11a5bVZrdYNTXY2otXSXr51J8pabV8tkY2KaypBKqys3qJxub+Js7XCkrPEhrFklKONW105GP8Q9T81/Lr8taF2YrrUquUXavJJLADgc4GTjuSeuFI7x5JTjclR1eGwDqkyARizggMP8tvYzLrcssWFzjzVfdG7QaaGpzrFk5O/Do+p6Ho6aa7tz01Mtb7iPKXnDgZGffkH9p5S7UzcTUqpc9ulnsf9t6RRUoOXF0ubaur3XXxKrx1rNN1BDq9OAfIBqsz+XYd7LsYL/vrB3LnPBbtjmexcrVcjxEoVLi3av4P1ZF0Xhmq1gqUrhjgN57Yzx3O/juJhhnzylTdfBcz6DNodDjg5KNtP/lLl8167zh/BNtSgWaa22x2YoKdzAAc7GPAU4zyf2M0SlqPaRarh2v8nkxjo/ZzTvjt8POq6fzZG1HSaRWQdDqFcD1OAgwQPURnVHHb+E4+s3cE+Z4v9bpr4eLf4mTBPcHB+Y+f0kGg2ej6zpL1za2n09oXUg79K1qnzqXVyhQHg2NvIOP1OOeDK+FosUk+ZqD0fQ6nQ+YK22mosjJ+UpFS2+XkYDYGHOD7n7Y6Sa9Mw5MsraTf9tdfC+j6lT4I/DM6qoanWtZVW6q1VaFQ7Bhnc+4HaO2B3+fynE8tbI3xx3uyHf8AhzanURomZvh7BYadSQDu2puw4HZgc8cZxn5yrNmfCuHm3X3f4LtPhi5vjukr+qX5J3TdDpem6a7WCxGur1D1CmxsrZsfaqgJlgwHOSPfJ45neHJOUVfVFOq02JZb/wCLtfH1+TB9U6g2osNjAAdlQchRknH17yzHDgjw235/b4HGSUZTc1FRvnSq33+b6kSWHIgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAW2i8RamsBTY7oBjbvK4GMcEfTjnMzvSYG7cfq/3NEtbq+GoZGq8Iv7pv6ll07xrqNPWKqsqhyHXcTkFixK/9ZJ5b37S3gj3GT397d39bd7/AGIY8SuHDbAyhrGwWOTuTHJHvksfrmZp6RSm8kXTaS9eex6OHXShhjhnFSSbdefJfDf0iNrPEGqtrSprMBB+pQUd/QUzYc5Y7Sw9s7jnOczYebDFGEnKK3fMq4LCZ0nVim5bWBIG7gYzypHv95n1WF5sTgnV19zVodQtPnjlkrSv6qjRnxihG0pcQMcZXHH7zyX2TlarjX1PeXb2BO1jf9v7inxbUunSjZcCq2AsBWR6qmQY53cFg3f29u89hY2j5yWRNtk7T/iH5Wq85KrGoatUelmRTkE4ZcDHYn5Zzz2zOlDajhy3svNN+LGlUgnS6nj5Go/3aQ4NoKdMzms8ZaaxbB5N+5xaAd1YA3dsj6ZOeflNHHtR4q7Nkp8V9b5+K8PPqYkTg9g5gGg6R4x1mmWupWRqU2jyjWnqQMSV3YyM5PP1hlLwR4m+8uPGfjxeoCjZXfT5Vq2EC4YOPdcDO8Hs3tKoY+E1SnxHZ4j/ABMvvNPwyGnyiWFjlbXZihTJwABwzfznD08Zc/oWQ1MofpS7t/S7jEavUva7Wucu7F2PYFj3OJbCChFRRVkm5ycn1OqdnAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgH/2Q=="  alt="SEO" className="blog-item-image-img"/>
                  </div>
                  <div className='blog-item-info'>
                    <span>What is SEO? Search Engine Optimization Explained.</span>
                    <span className='blog-item-info-link'>Read →</span>
                  </div>
                </a>
                <a href="">
                  <div className='blog-item-info'>
                    <span>How To Do Keyword Research for SEO — Ahrefs’ Guide.</span>
                    <span className='blog-item-info-link'>Read →</span>
                  </div>
                </a>
                <a href="">
                  <div className='blog-item-info'>
                    <span>How to Get Backlinks: 7 Tactics That Don’t Require New Content.</span>
                    <span className='blog-item-info-link'>Read →</span>
                  </div>
                </a>
              </div>
            </Zoom>
            <Zoom>
              <div className='blog-item'>
                <div className='blog-item-title'>
                  <h3>Get answers in the Help Center</h3>
                </div>
                <a href="">
                  <div className='blog-item-image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoCZo25tMjRl9wg4rWdDGP69QooCUeKnOIFQ&usqp=CAU"  alt="SEO" className="blog-item-image-img"/>
                  </div>
                  <div className='blog-item-info'>
                    <span>Got a question about our tools or data? Chances are good that there's an answer ready for you.</span>
                    <span className='blog-item-info-link'>300+ support articles in the Help Center →</span>
                  </div>
                </a>
              </div>
            </Zoom>
          </div>
        </div>

        <div className='demonstration-bg'>          
          <div className='container'>
            <div className='demonstration'>
              <Fade left>  
              <div className='demonstration-info'>
                <div className='demonstration-info-title'>
                  <h3>Personal demonstration</h3>
                </div>
                <div className='demonstration-info-main'>
                  <p>Seolitte is all about saving time, and we want to save yours!</p>
                  <p>One of our specialists will contact you and discuss options going forward. These may include a personal demonstration, a trial period, comprehensive training articles webinar recordings, and custom advice from a Seolitte specialist. It is our goal to make you feel comfortable while using Seolitte.</p>
                </div>
              </div>
              </Fade>
              <Fade right>
              <div className='demonstration-form'>
                <Formik
                  initialValues={{
                      email: "",
                      name: "",
                      phone: ""
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                      submitFormSubs(values, setSubmitting)
                  }}>

                  {({ isSubmitting }) => (

                  <Form className='form'>
                      <div className="form__item">
                          <label htmlFor="email" className="form__item-label">Email</label>
                          <Field name="email" placeholder="example@email.com" type="email"  className="form__item-input"/>
                      </div>
                      <div className="form__item">
                          <label htmlFor="name" className="form__item-label">Name</label>
                          <Field name="name" type="text" placeholder="Your name" className="form__item-input" />
                      </div>
                      <div className="form__item">
                          <label htmlFor="phone" className="form__item-label">Phone</label>
                          <Field
                              name="phone"
                              placeholder="+373 "
                              type="phone"
                              className="form__item-input"
                          />
                      </div>
                      


                  <button type="submit" disabled={isSubmitting} className="form__item-btn">See Seolitte in Action</button>

                  </Form>

                  )}

                </Formik>
              </div>
              </Fade>
            </div>
          </div>
        </div>  
        

      </div>

  )
}

export default Home
