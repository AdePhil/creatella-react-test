import React, { useEffect, useState } from 'react';

const Loader = (props) => {
  const [dotCount, setDotCount] = useState(0); 
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      if(dotCount >= 3) {
        setDotCount(0);
        setLoadingText('Loading');
        return;
      }
      setLoadingText((text) => `${text}.`);
      setDotCount((count) => count + 1);
    }, 400);
    return () => clearInterval(interval);
  });
  
  return (
    <div className="loader">
      {loadingText}
    </div>
  );
  
}
export  default Loader;
