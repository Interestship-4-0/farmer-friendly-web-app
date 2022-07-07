import React from 'react'
import "https://kit.fontawesome.com/94cb9e2368.js"
import axios from 'axios';
import './sell.css'
const Sell = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const waste = queryParams.get("waste");
  const [quantity, setQuantity] = React.useState(0);
  const sell = () => {
    axios({
      method: "Post",
      url: `http://localhost:8080/api/v1/farmers/${id}/${waste}`,
      data: {
        quantity: `${quantity}`,
        revenue:0
      }
    }).then((res) => {
      alert("successfully submitted");
    }).catch((err) => {
      alert("some error occurred! Please try again after some time");
    })
  }
  return (
    <div>
      <center>
        <div className="sell">
          <div className="sell-form">


            <h4 className="textt" style={{ marginTop: "30px", marginBottom: "20px" }}><i className="fa-solid fa-cannabis" style={{ fontSize: "120px" }}></i></h4>
            <input onChange={(event) => {
              setQuantity(event.target.value);
            }} className="quantity" type="text" placeholder='Quantity To Be Sold....'></input>
            <button onClick={sell} type="button" className="btnn">SELL</button>


          </div>
        </div>
      </center>
    </div>
  )
}

export default Sell