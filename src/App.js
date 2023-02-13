import React,{ useState} from 'react';
import './App.css';
import ComponentB from './ComponentB';

function App() {
  const [cendol, setCendol] = useState(2)


  return (
    <ComponentB cendol={cendol} setCendol={setCendol} />
  );
}

export default App;
