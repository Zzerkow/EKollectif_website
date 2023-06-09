
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
