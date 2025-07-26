import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import bgImage from '../assets/AI.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // TODO: Add login logic
  };

  return (
    <div
      className="login-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="overlay-blur" />

      <div className="card login-card shadow-lg p-4" style={{ borderRadius: '30px', zIndex: 2, width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 text-primary">AI Speak To Search</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-decoration-none">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don’t have an account? <a href="/register" className="text-decoration-none">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
