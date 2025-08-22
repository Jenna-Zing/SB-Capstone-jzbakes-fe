import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('User logged out'); // Placeholder for logout logic
    navigate('/');  // I think this should be a logout page, then set redirect after 3 seconds while we clear user session - then navigate to home
  };

  return (
    <button onClick={handleClick}>
      Logout
    </button>
  );
}

export default LogoutButton;