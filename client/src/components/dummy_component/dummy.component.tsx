import React, { useState } from 'react';

export const incrementCount = (prevCount: number): number => {
  return prevCount + 1;
};

const MyComponent: React.FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};

const DummyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  const handleIncrement = () => {
    setCount(incrementCount);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count + 0}</p>
      <MyComponent title={"Another component Title to test"}/>
    </div>
  );
};

export default DummyComponent;
