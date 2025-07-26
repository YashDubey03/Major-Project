import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import bgImage from '../assets/AI.jpg';

const ForgotPassword = () => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    console.log('Sending OTP to:', mobile);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    console.log('Verifying OTP:', otp);
    // TODO: Validate OTP and allow password reset
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
        <h3 className="text-center mb-4 text-primary">Forgot Password</h3>
        {!otpSent ? (
          <>
            <label className="form-label">Enter Mobile Number</label>
            <input type="tel" className="form-control mb-3" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <button className="btn btn-primary w-100" onClick={handleSendOtp}>Send OTP</button>
          </>
        ) : (
          <>
            <label className="form-label">Enter OTP</label>
            <input type="text" className="form-control mb-3" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <button className="btn btn-success w-100" onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
        <p className="text-center mt-3"><a href="/login" className="text-decoration-none">Back to Login</a></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
