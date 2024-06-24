import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  //  useEffect(()=>{
  //   fetch('https://api.github.com/users/yashika532')
  //   .then(response => response.json())
  //   .then(data => {
  //      console.log(data);
  //      setData(data);
  //   })
  //  },[])
  
  return (
    <div className='text-center m-5 bg-purple-600  text-3xl'>GitHub followers: {data.followers}

    <img src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default GitHub

export const gitloader = async () => {
  const response = await fetch('https://api.github.com/users/yashika532')
  return response.json();
}