import React, { useState } from 'react';
import './dashbord.css';

const Dashboard = () => {
  const [cardContent, setCardContent] = useState(null);

  const handleUserClick = () => {
    setCardContent({
      name: 'User Name',
      email: 'user@example.com',
      type: 'User Type',
      value: 'User Value'
    });
  };

  const handleBookClick = () => {
    setCardContent({
      name: 'Book Name',
      email: 'book@example.com',
      type: 'Book Type',
      value: 'Book Value'
    });
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={handleUserClick}>User</button>
        <button onClick={handleBookClick}>Book</button>
      </div>
      <div className="content">
        {cardContent && (
          <div className="card">
            <p>Name: {cardContent.name}</p>
            <p>Email: {cardContent.email}</p>
            <p>Type: {cardContent.type}</p>
            <p>Value: {cardContent.value}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
