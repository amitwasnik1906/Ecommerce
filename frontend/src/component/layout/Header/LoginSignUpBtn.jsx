import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function LoginSignUpBtn() {
    return (
        <>
            <Link to={"/login"}>
                <button className='LoginSignUpBtn'>
                    Login
                </button>
            </Link>
        </>
    )
}

export default LoginSignUpBtn
