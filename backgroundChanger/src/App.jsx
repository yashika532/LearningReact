import { useState } from "react"
function App() {
  const [color,setColor] = useState("#F7F7FF")

  return (
    
     <div className="w-full h-screen duration-200 "
     style={{backgroundColor:color}}
     >
         <div className="fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2">
          <div className="flex flex-col flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-xl my-20">
            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg text-black" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg text-black" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"teal"}} onClick={()=>setColor("teal")}>Teal</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg text-black" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>

            <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg text-white" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
    
          </div>
         </div>
     </div>
    
  
     
  )
}

export default App
