import { useState } from 'react';
import "./index.css";

function Button (props) {
  return (
      <button className="w-28 h-28 bg-white text-black text-5xl font-bold border border-sky-500 hover:bg-sky-50">{props.numero}</button>
  )  
}

function App() {
  const [count, setCount] = useState(0) // Constante para los clicks

  return (
    <>
      <div className=''>
        <h1 className='flex items-center justify-center font-bold text-7xl font-serif mt-9'>Tic Tac Toe Game</h1>
        
        <div class="flex justify-center items-center min-h-[60vh]">
          <div className="grid grid-cols-3 bg-white shadow-lg shadow-blue-300 rounded-lg ">
            <Button numero="X"></Button>
            <Button numero="O"></Button>
            <Button numero="X"></Button>
            <Button numero="O"></Button>
            <Button numero="X"></Button>
            <Button numero="O"></Button>
            <Button numero="X"></Button>
            <Button numero="O"></Button>
            <Button numero=""></Button>
          </div>
        </div>

      </div>  
    </>
  )
}

export default App

function winner(){

}