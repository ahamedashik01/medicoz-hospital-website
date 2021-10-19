import { Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div className="login-form">
            <div className="form">
                <h2>Login</h2>
                <form >
                    <input className="input" type="email" name="" id=""
                        placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="" id=""
                        placeholder="Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="Submit" />
                </form>
                <p className="my-4">new to Medicoz? <br /> <Link to="/registration">Create Account</Link></p>
                <div>Or</div>
                <hr />
                <button onClick={signInUsingGoogle} className="btn btn-info">Google Sign In</button>
            </div>
        </div >
    );
};

export default Login;
