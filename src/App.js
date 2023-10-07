import './App.css';
import { useState } from 'react';
import Text from './Text';

function App() {
  const [showText, setShowText] = useState(false)


  return (
    <>
      <button onClick={() => { setShowText(!showText) }} >ShowText</button>
      {showText && <Text />}

    </>
  );
}

export default App;
