import React from 'react'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function LoginRegister() {
  var parser=require('cookie-parse');
  const navigate=useNavigate();
  return (
    <>
      <div className='headinglogin' id="LOGIN">
        <div id="heading">LOGIN/REGISTRATION</div>    
      </div>
      <div className='image-box'>
        <div className='imagebox'>
          <ManageAccountsIcon className='loginRegister' sx={{fontSize:"310px"}}/>
          <br/>
          <Button onClick={()=>{
            window.scrollTo(0,0);
            navigate("/register");}} variant="contained"  sx={{ bgcolor:"#55d483",marginLeft:10,padding: "12px 35px",fontSize:"17px" }} size="large">
                Register
          </Button>
        </div>

        <div className='imagebox'>
          <HowToRegIcon className='loginRegister' sx={{fontSize:"310px"}}/>
          <br/>
          <div className='ok'>
          <Button onClick={()=>{
            if(document.cookie){
             var idNo=Number(parser.parse(document.cookie).id);
              navigate(`/dashboard/${idNo}`);
              
            }
            else{
              navigate("/login");
            }
          }} variant="contained"  sx={{bgcolor:"#55d483", marginLeft:10 ,padding: "12px 35px",fontSize:"17px"}} size="large">
                Login
          </Button>
          </div>
       
          
        </div>

      </div>
    </>
  )
}
export default LoginRegister