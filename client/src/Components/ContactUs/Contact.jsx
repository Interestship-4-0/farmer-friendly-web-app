import React from 'react'
import './contact.css'

export const Contact = () => {
  return (
    <div>
  
        <div className='container' id="CONTACT">
        <div className='container1'>
              <div className='title'>
                <h1 style={{color:"white", fontSize:"50px"}}>CONTACT US</h1>
                <p style={{marginTop:"-20px", marginBottom:"50px",fontSize:"20px" ,fontStyle:"italic"}}>
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
          </div>
  )
}

export default Contact;
