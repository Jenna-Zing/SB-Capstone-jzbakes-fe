import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <button onClick={handleClick}>
      Sign Up
    </button>
  );
}

export default SignUpButton;