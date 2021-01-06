import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { Formik, Field, Form } from 'formik';
import AnimateOnChange from 'react-animate-on-change'


function Start() {

    const submitForm = ( values, setSubmitting ) => {
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

    <div className='start'>
        <div className='container'>
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
                      // platform: ""
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

    )
}

export default Start
