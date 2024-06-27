import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import GoogleLoginButton from './GoogleLoginButton';
// import FacebookLoginButton from './FacebookLoginButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
//   const handleGoogleLoginSuccess = (response) => {
//   };

//   const handleFacebookLoginSuccess = (response) => {
//   };
   

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
      setError('');
      history.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <h2>Login</h2>
      {/* <GoogleLoginButton onSuccess={handleGoogleLoginSuccess} />
      <FacebookLoginButton onLogin={handleFacebookLoginSuccess} /> */}
      
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
