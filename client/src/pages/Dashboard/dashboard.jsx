import React, { useEffect } from 'react';
import './dashboard.css';
import "https://kit.fontawesome.com/94cb9e2368.js";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Dashboard = () => {
  const data =
  { "Wheat Husk": 0 ,
  "Rice Husk": 0 ,
  "Corn Bot": 0,
  "Tobacco Crop Waste": 0,
  "Castor Crop Waste": 0,
  "Cotton Plants Left Out": 0
};
const[wasteData,setWasteData]=useState(data);
const keys=Object.keys(data);
const[waste,setWaste]=useState(keys);
const[revenue,setRevenue]=useState(0);
const navigate=useNavigate();
const {id}=useParams();
  const redirect=(waste)=>{
    navigate(`/sell/search?id=${id}&waste=${waste}`);
  }
  useEffect(()=>{
    axios({
      method:"GET",
      url:`http://localhost:8081/api/v1/farmers/${id}/wastes`
    }).then((res)=>{
      setWasteData(res.data);
      setWaste(Object.keys(res.data));
       setRevenue(Object.values(res.data).reduce((total,num)=>{
        return total+num;
       }));
    }).catch((err)=>{
      console.log(err);
    })
  });
  return (
    <div>
      <button onClick={()=>{
         document.cookie="id=;expires=Thu,01 Jan 1970 00:00:00 UTC;path=/;";
         document.cookie="mail=;expires=Thu,01 Jan 1970 00:00:00 UTC;path=/;";
         window.location.href="/";
      }} >Log Out</button>
        <center>
        <div className="dashboard">
          <div className="table">
          <table>
            <thead>
        <tr>
          <th>WASTE - TYPE</th>
          <th>QUANTITY OF WASTE</th>
        </tr>
        </thead>
       <tbody>
       {
          waste.map((key,index)=>{
            return(
              <tr key={index} >
              <td>{key}</td>
              <td>{wasteData[key]}</td>
            </tr>

            )
            
          })
        }
       </tbody>
      </table>
          </div>
          <div className="mainbox">
          <div className="main">
           <div className="box1">
               <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">WHEAT HUSK</h4>
                   <button onClick={()=>{
                    redirect("wheathusk");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">RICE HUSK</h4>
                   <button onClick={()=>{
                    redirect("ricehusk");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        <div className="main">
           <div className="box1">
           <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">CORN BOTS</h4>
                   <button onClick={()=>{
                    redirect("cornbot");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">TOBACCO CROP WASTE</h4>
                   <button onClick={()=>{
                    redirect("tobaccocrop");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        <div className="main">
           <div className="box1">
           <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                   <h4  className="text">CASTOR CROP WASTE</h4>
                   <button onClick={()=>{
                    redirect("castorcrop");
                   }} type="button" className="btn">SELL THE WASTE</button>
              </div>
        </div>
        <div className="box2">
        <div className="header-form">
                   <h4 style={{marginTop: "0px"}}><i class="fa-solid fa-cannabis" style={{fontSize:"40px"}}></i></h4>
                  <h5 className="text">COTTON PLANTS LEFT OUT</h5>
                   <button type="button" onClick={()=>{
                    redirect("cottonplants");
                   }} className="btn">SELL THE WASTE</button>
              </div>
        </div>
        </div>
        </div>
       </div>
       <div className="footer2">
        <h1>Total Revenue Generated : {revenue}</h1>
       </div>
        
       </center>
       
    </div>
  )
}

export default Dashboard