import { useState,useCallback,useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] =useState(false);
  const [characterAllowed,setCharacterAllowed] =useState(false);
  const[password,setPassword]=useState("");
  //ref hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str+="1234567890"
    if(characterAllowed)str+="!@#$%^&"
    for(let i=1;i<=length;i++){
      let char=(Math.floor)(Math.random()*str.length+1)
       pass += str.charAt(char);
    }
     
    setPassword(pass);

  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])

  //useeffect jb page load hota h tb call hota h fir agr dependencies mai kch change kiya to reload hota h
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
 
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-yellow-500 bg-gray-800">

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hodden mb-4">

          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          ref={passwordRef}/>
         
         <button onClick={copyPassToClip} className='outline-none rounded bg-blue-700 text-white py-0.5 shrink-0'
         >Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
           
           <div className="flex items-center gap-x-1">
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={(e)=>{setNumberAllowed((prev)=>!prev);
            }}/>
            <label for='numberInput'>Numbers</label>

           </div>
           <div className="flex items-center gap-x-1">
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='characterInput'
            onChange={(e)=>{setCharacterAllowed((prev)=>!prev);
            }}/>
            <label for='CharacterInput'>Characters</label>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
