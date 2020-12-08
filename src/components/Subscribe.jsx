import React from 'react';
import { Formik, Field, Form } from 'formik';
import {Fade} from 'react-reveal';

function Subscribe() {
    const submitFormSubs = ( values, setSubmitting ) => {

        setTimeout(() => {
            alert(JSON.stringify(values))
            setSubmitting(false);
        }, 100);
        
    }
    return (
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
    )
}

export default Subscribe;
