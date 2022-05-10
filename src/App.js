import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import { useState } from 'react';



function App() {
  const[count,setCount] = useState(0);

  return (
    <div className="App"> 
    <Router>
      <Navbar/>
      </Router>

      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>agregar al carrito</h2>

        </div>
    
    </div>
  );
  }


export default App;
