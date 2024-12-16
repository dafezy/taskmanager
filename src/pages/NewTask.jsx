import React,{useEffect, useState} from 'react'
import'../styles/NewT.css'


const NewTask = () => {
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

  if(isLoading) return <div>Loading...</div>
  if(error) return <div> Error:{error}</div>







   
  
  return (
    <div>
      {tasks.map((task)=>(
        <div key={task._id} className='task-item'> 
        <input className='box' readOnly value={task.tags}/>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>

        <p>{task.description}</p>
       
       

        </div>

      ))}
      

      

     

    </div>
  )
}

export default NewTask
