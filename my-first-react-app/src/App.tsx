import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent title="Welcome to My First React App!" />
      <div style={{ marginTop: '20px' }}>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
