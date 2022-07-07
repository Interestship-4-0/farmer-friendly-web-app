import React from 'react'
import"https://kit.fontawesome.com/94cb9e2368.js" 
import './sell.css'

const Sell = () => {
  return (
    <div>
        <center>
        <div className="sell">
               <div className="sell-form">
                   <h4 style={{marginTop:"30px", marginBottom:"20px"}} className="text"><i className="fa-solid fa-cannabis" style={{fontSize:"120px"}}></i></h4>
                   <h2>Quantity to be Sold : 0 </h2>
               <div className="header-form">
                   <h4  className="textt" style={{marginTop:"30px", marginBottom:"20px"}}><i className="fa-solid fa-cannabis" style={{fontSize:"120px"}}></i></h4>
                   <input className="quantity" type="text" placeholder='Quantity To Be Sold....'></input>
                   <button type="button" className="btnn">SELL</button>
              </div>
          
        </div>
       </div>  
       </center>
    </div>
  )
}

export default Sell