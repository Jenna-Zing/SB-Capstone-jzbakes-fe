import React from 'react';
import TopNavigation from '../components/TopNavigation';

function LoginPage() {
  return (
    <>
      <TopNavigation />
      <h1>Login Page</h1> 
      {/* Make this into a LoginSection component -> no modal, just do email + password + button, and move header into this*/}
    </>
  );
}

export default LoginPage;