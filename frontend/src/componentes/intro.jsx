import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div style={{
      backgroundColor: '#d080ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
     <h1 style={{ color: 'white', fontSize: '40px' }}>YANY</h1>
        </div>
  );
}

export default Intro;