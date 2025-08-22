import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'; // Adjust the path as necessary

function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button onClick={handleClick}>
      <img src={logo} className="App-logo" alt="logo" style={{ height: '40px' }} />
    </button>
  );
}

export default LoginButton;