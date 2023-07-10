import React,{useState} from 'react'
import styles from './Home.module.css'
const Home = () => {
    const [input,setInput]=useState({
        name:"",
        email:""
    })
    const [data,setData]=useState([])
    const [edit,setEdit]=useState(false)
    const [editIndex,setEditIndex]=useState("")
  function handleChange(e){
       setInput(
        {
            ...input,
           [e.target.name]:e.target.value
        }
       )
      
  }

  function handleSubmit(e){
      e.preventDefault()
    
    if(edit){
         const tempdata = [...data];
  tempdata[editIndex] = input;
  setData(tempdata);
    }
    else{
            setData(
      [...data,input]
      )
      setInput(
        {
            name:"",
            email:""
        }
      )
     

    }
  }

  function removeItem(id){
       const item=data.filter((elem,i)=>i!==id)
       setData(item)
       console.log(item)
  }

  function handleEdit(id){
     const tempData=data[id]
     setInput(
       {
        name:tempData.name,
        email:tempData.email
       }
     )
     setEdit(true)
     setEditIndex(id)
  }

  return (
    <div className={styles.formContainer}>
      <h1>Crud Application</h1>
      <div>
        <form onSubmit={handleSubmit}>
           
                <label>Name</label>
                <input type='text' name='name' value={input.name} onChange={handleChange}/>

                <label>Email</label>
                <input type='email' name='email' value={input.email} onChange={handleChange}/>

           
            <button type='submit'>{edit ?"Update":"Add"}</button>
        </form>
      </div>
     <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,i)=>{
                   return  <tr key={i}> 
                    
                   
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button onClick={()=>handleEdit(i)}>edit</button>
                            <button onClick={()=>removeItem(i)}>delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
     </div>
    </div>
  )
}

export default Home
