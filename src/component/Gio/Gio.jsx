
import { useState, useEffect } from "react";
function Gio() {
  const [data,setdata]=useState();
  useEffect(()=>{
  fetch('https://api.github.com/users/hiteshchoudhary')
  .then(response =>response.json)
  .then(data =>{
    console.log(data);
    setdata(data)
  })
  },[])
  return (
    <div className="text-center m-4 bg-black text-white p-4 text-3xl">gitHubbbbb: {data.followers}</div>
  )
}

export default Gio