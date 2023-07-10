import React,{useState,useEffect} from "react";
import axios from 'axios'
export  function Practice() {
  const [input,setInput]=useState({
    fname:"",
    lname:""

  })
  

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }

  
   async function handleClick(e){
      e.preventDefault()
    const response= await axios.post("https://jsonplaceholder.typicode.com/users",input)
    console.log(response)
    }

    async function handleEdit(e){
      e.preventDefault()
    const response= await axios.put( `https://jsonplaceholder.typicode.com/users/1`,input)
    console.log(response)
    }

    async function handleDelete(e){
      e.preventDefault()
    const response= await axios.delete( `https://jsonplaceholder.typicode.com/users/1`)
    console.log(response)
    }
  
  return (
    <div>
      <label>firstName</label>
      <input type="text" name="fname" value={input.fname} onChange={handleChange}/>
      <label>lastName</label>
      <input type="text" name="lname" value={input.lname} onChange={handleChange}/>
       <button onClick={handleClick}>submit</button>
       <button onClick={handleEdit}>Update</button>
       <button onClick={handleDelete}>Update</button>
     
    </div>
  );
}
