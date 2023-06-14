import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/Fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Registar = () => {

  const {createUser,updateProfilePicture,handleGoogleAuthProvider} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate()

   const handleSignUp = event =>{
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    console.log(name,email,password,photo)
   
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      updateProfilePicture(name,photo)
      .then(()=>{
        console.log('Update profile success')
        reset()
      })
      .catch(error=>console.log(error))
    })
    .catch(error=>{
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    })
    // navigate('/')
   }

   const handleGoogleLogin = () =>{
    handleGoogleAuthProvider()
    .then(result=>{
      const user = result.user;
      console.log(user)
      navigate(path)
    })
    .catch(error=>{
      console.log(error)
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
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-slate-700">Registar</button>
                <p><small>Already have an account! Please <Link className='text-primary' to='/login'>Login</Link></small></p>
                {errorMessage && <p className='text-red-600 text-lg'>Invalid email account</p>}
              </div>
            </div>
           </form>
           <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline my-2 mx-auto"><FaGoogle/></button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Registar;