import "./registrationPage.css";
import * as React from 'react';
function Register() {
    return (
        <>
        <div className="registerPage">
        <h1>Registration Page</h1>
            <div id="register">
                <form method="POST">
                <p>Name:</p>
                <input type="text" placeholder="Type your name.." required/>
                <p>Email Address:</p>
                <input type="email" placeholder="Type your email.." required/>
                <p>Mobile Number:</p>
                <input type="number" placeholder="Type your number.." max={10} required/>
                <p>Password:</p>
                <input type="password" placeholder="Type your password.." required max={6}/>
                <button>Register</button>
                </form>
            </div>
            </div>
        </>
    )
}
export default Register;