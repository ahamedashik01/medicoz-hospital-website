import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div className="form">
                <h2>Create Account</h2>
                <form>
                    <input className="input" type="email" name="" id=""
                        placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="" id=""
                        placeholder="Your Password" />
                    <br />
                    <input className="input" type="password" name="" id=""
                        placeholder="Re-enter Password" />
                    <br />
                    <input className="btn-regular" type="submit" value="Submit" />
                </form>
                <p className="my-4">Already have an account? <br /> <Link to="/login"> Login here</Link></p>
                <div>Or</div>
                <hr />
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;