// import React from 'react';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import { FaFacebook } from 'react-icons/fa';

// const FacebookLoginButton = ({ onLogin, onFailure }) => {
//   const appId = 'YOUR_FACEBOOK_APP_ID';

//   const handleFacebookLogin = (response) => {
//     console.log('Facebook login success:', response);
//     // Handle successful login
//     onLogin(response);
//   };

//   return (
//     <FacebookLogin
//       appId={appId}
//       autoLoad={false}
//       fields="name,email,picture"
//       callback={handleFacebookLogin}
//       render={(renderProps) => (
//         <button onClick={renderProps.onClick}>
//           <FaFacebook /> Login with Facebook
//         </button>
//       )}
//     />
//   );
// };

// export default FacebookLoginButton;
