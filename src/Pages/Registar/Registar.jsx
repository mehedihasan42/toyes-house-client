import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/Fc";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Registar = () => {

  const {createUser} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");

   const handleSignUp = event =>{
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photoUrl = from.photoUrl.value;
    console.log(name,email,password,photoUrl)
   
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    })
   }

    return (
        <div>
             <div className="hero min-h-screen bg-[#FFFFE0]">
        <div className="hero-content">
       
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className='text-center text-2xl font-bold pt-4'>Please SignUp</h2>
           <form onSubmit={handleSignUp}>
           <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input  type="text" name='name' placeholder="Your Name" className="lg:w-80 input input-bordered" />
              </div>
              {/* -------------------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  type="email" name='email' placeholder="Email" className="lg:w-80 input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registar</button>
                <p><small>Already have an account! Please <Link className='text-primary' to='/login'>Login</Link></small></p>
                {errorMessage && <p className='text-red-600 text-lg'>Invalid email account</p>}
              </div>
            </div>
           </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Registar;