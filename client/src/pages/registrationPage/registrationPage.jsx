import "./registrationPage.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import * as EmailValidator from "email-validator";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import WarningModal from "../../Components/warningModel/warningModal";
function Register() {
    const[show,setShow]=useState(false);
    const [warn,SetWarn]=useState("No error");
    const[name,setName]=React.useState();
    const[email,setEmail]=React.useState();
    const[number,setNumber]=React.useState();
    const[aadhar,setAadhar]=React.useState();
    const[village,setVillage]=React.useState();
    const[password,setPassword]=React.useState();
    const[confirm,setConfirm]=React.useState();
    const[stateName,setStateName]=React.useState();
    const[districtName,setDistrictName]=useState();
    const [type,setType]=useState("text");
    const [dob,setDob]=useState();
    var [districts,setDistricts]=useState([
        {
            "value":"no state selected","label":"no state selected"
        }
    ]);
    const navigate=useNavigate();
    let statesAndDistricts=require("../../districtsAndStatesData.json");
    const states=statesAndDistricts.map(r=>r.state);
    const handlechange=(event)=>{
    setStateName(event.value);
    console.log(stateName);
    const findStateIndex=statesAndDistricts.findIndex(r=>r.state===event.value);
    districts=statesAndDistricts[findStateIndex].districts.map(r=>(
        {
            "value":r,"label":r
        }
    ))
    setDistricts(districts);
   }
    const state=states.map(r=>(
        {
            "value":r,"label":r
        }
    ))
    const checkAndSubmit=(event)=>{
        if(name!=="" && name!==undefined && email!=="" && email!==undefined && number!=="" && number!==undefined && aadhar!=="" && aadhar!==undefined && password!=="" && password!==undefined && confirm!=="" && confirm!==undefined && village!=="" && village!==undefined){
            event.preventDefault();
            var regNameM = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
            var regNameL = /^[a-zA-Z]+ [a-zA-Z]+$/;
            var regNameF = /^[a-zA-Z]+$/;
            var regex=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
            if(!regNameM.test(name) && !regNameL.test(name) && !regNameF.test(name)){
                setShow(true);
                SetWarn("Enter proper name");
            }
            else if(EmailValidator.validate(email)!==true){
                setShow(true);
                SetWarn("Enter proper mail address");
            }
            // else if(number<=0 || number.length>10 || number.length<10){
            //     setShow(true);
            //     SetWarn("Please enter a valid phone number");
            // }
            else if(!regex.test(aadhar)){
                setShow(true);
                SetWarn("Please enter the valid aadhar number");
            }
            else if(dob==="" || dob===undefined){
                setShow(true);
                SetWarn("Please select your date of birth")
            }
            else if(stateName==="" || stateName===undefined){
                setShow(true);
                SetWarn("Please select a state");
            }
            // else if(districtName==="" || districtName===undefined){
            //     setShow(true);
            //     SetWarn("Please select a district");
            // }
            else if(password!==confirm){
                setShow(true);
                SetWarn("Both passwords should match");
            }
            else{
                var lastName=name.split(' ').slice(-1).join(' ');
                if(lastName===undefined){
                    lastName="";
                }
                var firstName=name.split(' ')[0];
                var num=number.toString();
                // var adn=Number(aadhar.split(' ').join(''));
                axios({
                    method:"POST",
                    url:"http://localhost:8081/register",
                    data:{
                        firstName:`${firstName}`,
                        lastName:`${lastName}`,
                        email:`${email}`,
                        phoneNo: `${num}`,
                        dob:`${dob}`,
                        state:`${stateName}`,
                        // district:`${districtName}`,
                        village:`${village}`,
                        aadharNo:`${aadhar}`,
                        password:`${password}`,
                        }
                }).then((res)=>{                    
                    if(res.data==='Success'){
                        alert("registered successfully");
                        navigate("/login");
                    }
                }).catch((err)=>{
                    alert("Some error occurred. Please try again after some time");
                })
            }
        }

    }
    return (
        <>
        
        <div className="registerPage">
            <div id="register">
            <h1>Registration Form</h1>
                <form method="POST">
                <input type="text" placeholder="Your name.." required onChange={(event)=>{
                    setName(event.target.value);
                }}/>
                <input type="email" placeholder="Your email.." required onChange={(event)=>{
                    setEmail(event.target.value);
                }} />
                <input type="number" placeholder="Your Mobile number.." maxLength={10} required onChange={(event)=>{
                    setNumber(event.target.value);
                }}/>
                <input type="text" placeholder="Your Aadhar number (xxx xxxx xxxx)" maxLength={14} required onChange={(event)=>{
                    setAadhar(event.target.value);
                }}/>
                <input onChange={(event)=>{
                    setDob(event.target.value);
                }} type={type} placeholder="select dob" onFocus={()=>{
                    setType("date");
                }} required />
                <Select className="select" options={state} placeholder="select state..." onChange={(event)=>handlechange(event)}/>
                <Select onChange={(event)=>setDistrictName(event.value)} className="select" placeholder="select district..." options={districts} />
                <input type="text" placeholder="Your Village.." required onChange={(event)=>{
                    setVillage(event.target.value);
                }}/>
                <input type="password" placeholder="Your password.." required maxLength={6} onChange={(event)=>{
                    setPassword(event.target.value);
                }}/>
                <input type="password" placeholder="Confirm password.." required maxLength={6} onChange={(event)=>{
                    setConfirm(event.target.value);
                }}/>
                <Button onClick={(event)=>{checkAndSubmit(event)}} type="submit" id="button" variant="contained">Register</Button>
                <p>Already have a account? <a href="/login">login</a></p>
                </form>
            </div>
            </div>
            <WarningModal show={show} content={warn} close={()=>{
                setShow(false);
            }} />
        </>
    )
}
export default Register;