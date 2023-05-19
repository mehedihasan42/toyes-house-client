import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/Fc";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

  const { signIn,handleGoogleAuthProvider  } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogIn = event => {
    event.preventDefault()
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      const errorMessage = error.message;
      setErrorMessage(errorMessage)
    })
  }

  const handleGoogleLogin = () =>{
    handleGoogleAuthProvider()
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error)
    })
  }

 
  return (
    <div className="hero min-h-screen bg-[#FFFFE0]">
      <div className="hero-content">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className='text-center text-2xl font-bold pt-4'>Please Login</h2>
          <form onSubmit={handleLogIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="lg:w-80 input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p><small>New in ToyesHouse! Please <Link className='text-primary' to='/registar'>SignUp</Link></small></p>
                {errorMessage && <p className='text-red-600 text-lg'>Your email or password is worng</p>}
              </div>
              </div>
          </form>
           
          <div className="divider">OR</div>
          <button className='btn btn-outline btn-info'>Facebook</button>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-success">Google</button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;