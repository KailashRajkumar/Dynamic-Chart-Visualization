import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter both username and password!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Login successful
        console.log('Login successfully!');
        localStorage.setItem('username', username);
        setLoggedIn(true);
      } else {
        // Login failed
        const errorData = await response.json();
        console.log('Login error:', errorData);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

   // Rendering the Home component if registered is true
  if (loggedIn) {
    return <Home />;
  }

  return (
    <div className="container rounded-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center ">
              <h4>LOGIN</h4>
            </div>
            <div className="card-body">
              <div className='text-center text-danger'>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label className='p-2'>Username:</label>
                  <input type="text" id="username" className="form-control" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className='p-2'>Password:</label>
                  <input type="password" id='password' className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='text-center p-3'>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <Link to={'/Signup'} className='text-decoration-none'>
                  <p className='text-dark p-3'>Don't Have an Account? Please Sign Up</p>
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



export default Login;
