import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter both username and password!');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, "Registered Successfully!!");
        setRegistered(true);
      } else {
        throw new Error('Registration failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Rendering the Login component if registered is true
  if (registered) {
    return <Login />;
  }

 

  return (
    <div className="container rounded-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center ">
              <h4>SIGN-UP</h4>
            </div>
            <div className="card-body">
              <div className='text-center text-danger'>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label className='p-2'>Username:</label>
                  <input type="text" id="username" className="form-control" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className='p-2'>Password:</label>
                  <input type="password" id='password' className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-center p-3'>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <Link to={'/Login'} className='text-decoration-none'>
                  <p className='text-dark p-3'>Have an Account? Please Login</p>
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};



export default Signup;
