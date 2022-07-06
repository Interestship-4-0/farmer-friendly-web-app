import React from 'react'
import"https://kit.fontawesome.com/94cb9e2368.js" 
import './sell.css'

const Sell = () => {
  return (
    <div>
        <center>
        <div className="container">
           <div className="form-box">
               <div className="header-form">
                   <h4 style={{marginTop:"30px", marginBottom:"20px"}} className="text"><i className="fa-solid fa-cannabis" style={{fontSize:"120px"}}></i></h4>
                   <h2>Quantity to be Sold : 0 </h2>
                   <button type="button" className="btnn">SELL</button>
              </div>
          
        </div>
       </div>  
       </center>
    </div>
  )
}

export default Sell