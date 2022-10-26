import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
  const {signIn,googleSignIn} = useContext(AuthContext);
  // const {googleSignIn} = useContext{AuthContext}
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = () =>{
    console.log('hello')
    googleSignIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user.email)
    })
    .catch(error =>{
      console.error(error);
    })
  }

  
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email , password)
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user.email)
        })
        .catch(error =>{
          console.error(error);
        })

        form.reset()
    }
    return (



        
        <div>
           
            <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
              
              <div className="hero-content flex-col lg:flex-row-reverse">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="text" name='password' placeholder="password" className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                      <label className="label">
                        <p> New to Delta Learning Hub? </p><a href="./register" className="label-text-alt link link-hover">Register Now</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button onSubmit={handleSubmit} className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
              
            </form>
            
         
            <button onClick={handleGoogleSubmit} className="btn btn-primary">Google Login</button>  
            <button className="btn btn-primary">Git Hub Login</button>  
        </div>
    );
};

export default Login;