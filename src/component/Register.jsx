import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import bgImage from '../assets/AI.jpg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register Info:', { name, email, mobile, password });
    // TODO: Add registration logic
  };

  return (
    <div
      className="login-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="overlay-blur" />
      <div className="card login-card shadow-lg p-4" style={{ borderRadius: '30px', zIndex: 2, width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 text-primary">Sign Up</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <p className="text-center mt-4 mb-0">Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
