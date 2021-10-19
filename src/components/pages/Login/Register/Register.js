
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


// email & pass authentication 
const Register = () => {

    const { handleRegistration, handleEmailChange, signInUsingGoogle, handlePasswordChange, error, signInw } = useAuth()
    return (
        <div className="login-form quality">
            <div className="form">
                <h2>Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} className="input" type="email" name="" id=""
                        placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} className="input" type="password" name="" id=""
                        placeholder="Your Password" />
                    <br />
                    <input className="input" type="password" name="" id=""
                        placeholder="Re-enter Password" />
                    <div className="text-danger">{error}</div>
                    <br />
                    <input className="btn btn-info text-white px-3 mt-3" type="submit" value="Submit" />
                </form>
                <p className="my-4">Already have an account? <br /> <Link to="/login"> Login here</Link></p>
                <div>Or</div>
                <hr />
                <button onClick={signInUsingGoogle} className="btn btn-info px-3 text-white"><i className="fab fa-google me-3"> Google Sign In</i></button>

            </div>
        </div>
    );
};

export default Register;