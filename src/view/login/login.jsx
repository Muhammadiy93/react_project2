import React from "react";
import './loginPage.css'

function Login() {
    return(
        <>
            <div className="logOut">
                <div className="home_login">
                    <h1 className="log">Log in</h1>
                    <input type="text" className="form-control contr" id="" placeholder="Login..."></input> <br />
                    <input type="password" className="form-control contr" placeholder="Password..." name="" id="" />
                    <button className="btn btn-primary p-3 but">Bajarildi</button>
                </div>
            </div>
        </>
    )
}

export default Login