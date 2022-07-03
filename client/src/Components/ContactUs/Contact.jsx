import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div>
    
        <div className='container'>
              <div className='section-title'>
                <h1 style={{color:"white"}}>CONTACT US</h1>
                <p style={{marginTop:"-15px", marginBottom:"50px", fontStyle:"italic"}}>
                We would like to hear from you...
                </p>
              </div>
              <form>
                <div className="all">
                <div className="box">
                    <div className="form">
                      <input className="input"
                        type='text'
                        placeholder='Your Name*' 
                      />
                       </div>
                    <div className="form">
                      <input className="input"
                        name='email'
                        placeholder='Your Email*'
                      />
                  </div>
                  <div className="form">
                      <input className="input"
                        name='number'
                        placeholder='Your Phone Number*'
                      />
                  </div>
                  </div>
                <div className="block">
                  <textarea className="message"
                    name='message'
                    placeholder ='Your Message*'
                  ></textarea>
                </div>
                </div>
                <button type='submit' className="submit">
                  SEND MESSAGE
                </button>
                
              </form>
            </div>
          </div>
  )
}

export default Contact
