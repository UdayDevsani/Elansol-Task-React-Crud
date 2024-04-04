import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
const Registration = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [dobTouched, setDOBTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const navigate  = useNavigate ();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, dob, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to register. Please try again later.');
      } else {
        setName('');
        setDOB('');
        setEmail('');
        setPassword('');
        setError('');
        alert('Registration successful!');
        navigate ('/login');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameTouched(true);
    validateForm();
  };

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
    setDOBTouched(true);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordTouched(true);
    validateForm();
  };

  const validateForm = () => {
    if (name.trim() && dob.trim() && email.trim() && password.trim()) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
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
                      <h5 className="card-title text-center pb-0 fs-4">Register Your Account</h5>
                      <p className="text-center small">Please provide the following details</p>
                    </div>
                    <form className="row g-3" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          value={name}
                          onChange={handleNameChange}
                          onBlur={() => setNameTouched(true)}
                          required
                        />
                        {nameTouched && !name.trim() && <div className="text-danger">Name is required</div>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourDOB" className="form-label">Date of Birth <span className="text-danger">*</span></label>
                        <input
                          type="date"
                          name="dob"
                          className="form-control"
                          id="yourDOB"
                          value={dob}
                          onChange={handleDOBChange}
                          onBlur={() => setDOBTouched(true)}
                          required
                        />
                        {dobTouched && !dob.trim() && <div className="text-danger">Date of Birth is required</div>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Email <span className="text-danger">*</span></label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={() => setEmailTouched(true)}
                          required
                        />
                        {emailTouched && !email.trim() && <div className="text-danger">Email is required</div>}
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
                        <button className="btn btn-primary w-100" type="submit" disabled={!formValid}>Register</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Already have an account? <Link to="/">Login here</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Registration;
