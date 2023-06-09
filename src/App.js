<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======

/* import */
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './Component/Navbar';
import Home from "./Pages/Home";
import Actions from "./Pages/Actions";

export default function App() {   
  return (
    <>

    <Navbar/>

    <div className='Main-Container'>

      <Routes>        
        <Route index element={<Home />}/>
        <Route path="Actions" element={<Actions />}/>
      </Routes>
      
    </div>   
  </>
  ); 
}
>>>>>>> Stashed changes