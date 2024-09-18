import { useState } from 'react'

function Button (props) {
  return (
    <button className='bg-blue-900 hover:bg-blue-500 text-white'> {props.numero}</button>
  )  
}

function App() {
  const [count, setCount] = useState(0) // Constante para los clicks

  return (
    <>
      <div>
        <Button numero="1"></Button>
        <Button numero="2"></Button>
        <Button numero="3"></Button>
      </div>
    </>
  )
}


export default App

function winner(){

}