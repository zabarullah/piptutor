import React, { useState } from 'react';

export const incrementCount = (prevCount: number): number => {
  return prevCount + 1;
};

const DummyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(incrementCount);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count + 0}</p>
    </div>
  );
};

export default DummyComponent;
