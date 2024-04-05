import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        toast.error(data.error); // Display error message with toast
        return;
      }

      const { token, user } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');

      toast.success('Login successful'); // Display success message with toast

    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.'); // Display error message with toast
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameTouched(true);
    setFormValid(e.target.value.trim() && password.trim());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordTouched(true);
    setFormValid(username.trim() && e.target.value.trim());
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Devonex</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username &amp; password to login</p>
                    </div>
                    <form className="row g-3" onSubmit={handleSubmit} method="post">
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Email <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="yourUsername"
                          value={username}
                          onChange={handleUsernameChange}
                          onBlur={() => setUsernameTouched(true)}
                          required
                        />
                        {usernameTouched && !username.trim() && <div className="text-danger">Email is required</div>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password <span className="text-danger">*</span></label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          value={password}
                          onChange={handlePasswordChange}
                          onBlur={() => setPasswordTouched(true)}
                          required
                        />
                        {passwordTouched && !password.trim() && <div className="text-danger">Password is required</div>}
                      </div>
                      {error && <div className="col-12 text-danger">{error}</div>}
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit" disabled={!formValid}>Login</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Don't have an account? <Link to="/signup">Create an account here</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Login;
