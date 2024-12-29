import React, { useState } from 'react';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Basic OTP validation (e.g., check if OTP is '1234')
    if (otp === '1234') {
      alert('Payment Successful!');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <div>
          <label>OTP</label>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTP;
