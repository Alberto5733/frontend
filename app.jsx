import {useState} from 'react'
import Form from './Form'
import Libros from '/Libros'
import './App.css'


function App() {
    
const [tipolibros,setLibros]=useState([]);
const addNombre = (nombre) => {
  setLibros([...tipolibros,nombre])
}

  
    return (
      <div className="App">
        <h1>Agregar color</h1>
        <form onaddNombre>{addNombre}</form>
        <Libros tipoLibros={tipolibros}/> 
      </div>
    );
  }
  
  export default App;