import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const EditTask = () => {
  const location = useLocation()
  const {task} = location.state || {}
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [tag, setTag]= useState('')

     useEffect(()=>{
      if(task){
        setTitle(task.taskTitle)
        setDescription(task.description)
        setTag(task.tags)
      }
     } ,[task])

     const handleSubmit = async (e)=>{
      e.preventDefault()
      try{
      const response = await fetch (`https://regback.onrender.com/api/task/updateTask/${task._id}`,{
        method:'PUT',
        headers : {
          'Cotent-Type': 'application/json',
        },
        body : JSON.stringify({
          taskTitle: title,
          description,
          tags:tag

        })
        

      })
      if(!response.ok){
        throw new Error('Failed to update task')
      }

    alert('Task updated succesfully')
      } catch( error){
        console.error(error)
        alert('Failed to update task')

      }
     }

  return (
    <div>
        <div className='tit'>
        <input className='input' type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>

      <div>
        <input className='input' type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>

      <div>
        <input className='input' type="text" placeholder='Tag' value={tag} onChange={(e)=>setTag(e.target.value)}/>
      </div>
      <div>
        <button className='done'>DONE</button>
      </div>
      
    </div>
  )
}

export default EditTask
