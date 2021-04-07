import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [show, setShow] = useState('derrmru-react')

  useEffect(() => {
    if (window.app_props) setShow(window.app_props.key1)
  })
  
  return (
    <div className="App">
      {show}
    </div>
  );
}

export default App;