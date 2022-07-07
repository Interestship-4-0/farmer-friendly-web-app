import React from 'react'
import './dashboard.css';
import "https://kit.fontawesome.com/94cb9e2368.js";
import {useNavigate} from "react-router-dom";
const data = [
  { Waste: "Wheat Husk", Quantity: 0 },
  { Waste: "Rice Husk", Quantity: 0 },
  { Waste: "Corn Bots", Quantity: 0},
  { Waste: "Tobacco Crop Waste", Quantity: 0},
  { Waste: "Castor Crop Waste", Quantity: 0},
  { Waste: "Cotton Plants Left Out", Quantity: 0},
]
const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <div>
        <center>
        <div className="dashboard">
          <div className="table">
          <table>
        <tr>
          <th>WASTE - TYPE</th>
          <th>QUANTITY OF WASTE</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Waste}</td>
              <td>{val.Quantity}</td>
            </tr>
          )
        })}
      </table>
          </div>
          <div className="mainbox">
          <div className="main">
           <div className="box1">
               <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">WHEAT HUSK</h4>
                   <button type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">RICE HUSK</h4>
                   <button onClick={()=>{
                    navigate("/sell");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        <div className="main">
           <div className="box1">
           <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">CORN BOTS</h4>
                   <button type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">TOBACCO CROP WASTE</h4>
                   <button type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        <div className="main">
           <div className="box1">
           <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">CASTOR CROP WASTE</h4>
                   <button type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                  <h5 className="text">COTTON PLANTS LEFT OUT</h5>
                   <button type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        </div>
       </div>
       <div className="footer2">
        <h1>Total Revenue Generated : 0</h1>
       </div>
        
       </center>
    </div>
  )
}

export default Dashboard