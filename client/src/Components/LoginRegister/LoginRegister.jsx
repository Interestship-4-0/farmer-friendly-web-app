import React from 'react'
import './LoginRegister.css'

import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function LoginRegister() {
  return (
    <>
      <div className='headinglogin' id="LOGIN">
        <div id="heading">LOGIN/REGISTRATION</div>    
      </div>
      <div className='image-box'>
        <div className='imagebox'>
          <ManageAccountsIcon sx={{fontSize:"310px"}}/>
          <br/>
          <Button variant="contained"  sx={{ bgcolor:"#55d483",marginLeft:10,padding: "12px 35px",fontSize:"17px" }} size="large">
                Click Here
          </Button>
        </div>

        <div className='imagebox'>
          <HowToRegIcon sx={{fontSize:"310px"}}/>
          <br/>
          <div className='ok'>
          <Button variant="contained"  sx={{bgcolor:"#55d483", marginLeft:10 ,padding: "12px 35px",fontSize:"17px"}} size="large">
                Click Here
          </Button>
          </div>
       
          
        </div>

      </div>
    </>
  )
}

export default LoginRegister