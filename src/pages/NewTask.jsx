import React,{useEffect, useState} from 'react'
import'../styles/NewT.css'
import{Link , useNavigate} from "react-router-dom"


const NewTask = () => {
  const navigate = useNavigate()
  const [tasks, setTasks]= useState([])
  const[isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const fetchTasks = async()=>{
      try{
        const response = await fetch ('https://regback.onrender.com/api/task/get')
        if(!response.ok){
          throw new Error('Failed to fetch tasks')
        }

        const data= await response.json()
        // update tasks state 
        setTasks(data.tasks)


      }catch(error){
        setError(error.message)

      } finally{
        setisLoading(false)

      }
    }



    fetchTasks()
// empty dependency array means this runs once when the component mounts 
  },[])


  const handleDelete  = async(id)=> {
    try{
    const response = await fetch(`https://regback.onrender.com/api/task/deleteTask/${id}`,{
      method: 'DELETE',
    })

    if(!response.ok){
      throw new Error('failed to delete task')
    }

    setTasks((prevTasks)=> prevTasks.filter((task)=> task._id !== id))
    alert('Task deleted successfully')


  }catch(err){
    console.error(err)
    alert('failed to delete task')

  }

  }

  if(isLoading) return <div>Loading...</div>
  if(error) return <div> Error:{error}</div>

   
  
  return (
    <div>
      {tasks.map((task)=>(
        <div key={task._id} className='task-item'> 
        <input className='box' readOnly value={task.tags}/>

        <button className='edit' onClick={()=> navigate(`/EditTask/${task._id}`,{state:{task}})}>Edit</button>
        <button className='delete' onClick={()=>handleDelete(task._id)}>Delete</button>
        <p>{task.taskTitle}</p>

        <p>{task.description}</p>

       
       

        </div>

      ))}
      

      

     

    </div>
  )
}

export default NewTask