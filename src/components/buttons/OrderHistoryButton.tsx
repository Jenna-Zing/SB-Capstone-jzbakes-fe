import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderHistoryButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order-history');
  };

  return (
    <button onClick={handleClick}>
      Order History
    </button>
  );
}

export default OrderHistoryButton;