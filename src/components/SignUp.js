import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    // Basic email validation using regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const validatePhoneNumber = (number) => {
    // Simple phone number validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setPhoneError('');

    // Validate inputs
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Invalid phone number (should be 10 digits)');
      isValid = false;
    }

    // If all inputs are valid, proceed with sign up
    if (isValid) {
      // Perform sign up logic here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div className="input-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div className="input-field">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
