import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import ItemCount from './Componentes/Items/ItemCount'



function App() {

  return (
    <div className="App"> 
    <Router>
      <Navbar/>
      <ItemCount/>

    </Router>

    
    </div>
  );
  }

export default App;
