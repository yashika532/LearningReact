import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(5)
    //  let counter =5

     const Addvalue=()=>{
      setCounter(counter+1)
      // counter++;
      // if(counter>=0)
      // document.getElementById('update').innerHTML=`Counter value : ${counter}`
    // else if(counter<0){
    //   counter=1;
    //   document.getElementById('update').innerHTML=`Counter value : ${counter}`
    // }
     }

     const decvalue=()=>{
      if(counter>0)
      setCounter(counter-1)
    else if(counter<=0){
      setCounter(0)
    }
      // counter--;
      // if(counter>0)
      // document.getElementById('update').innerHTML=`Counter value : ${counter}`
      // else if(counter<=0)
      //   document.getElementById('update').innerHTML=`Counter value : ${0}`
    }
      
   
    

  return (

    <>
     <h1>Learning Counter app</h1>
     <h2 id='update'>Counter value :{counter}</h2>
    <div className="button-holder">
    <button
     onClick={Addvalue}>Add Value</button>
     <br/>
     <button
     onClick={decvalue}>Decrease value</button>
      </div>
    
    </>
  )

}

export default App
