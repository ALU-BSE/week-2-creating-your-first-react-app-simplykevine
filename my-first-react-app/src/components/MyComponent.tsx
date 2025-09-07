// src/components/MyComponent.tsx
import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <p>This is a custom component with props and styling!</p>
    </div>
  );
};

export default MyComponent;
