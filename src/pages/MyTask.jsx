import React, {useState} from 'react'
import'../styles/MyTask.css'

const MyTask = () => {
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [tag, setTag]= useState('')
    const [error , setError] = useState(null)
    const [isLoading, setIsloading] = useState(false)


    const handleSubmit = async()=>{
      setIsloading(true)
      setError(null)

      try{
        const payload= {
          taskTitle:title,
          description: description,
          tags:tag,
        }



        const response = await fetch('https://regback.onrender.com/api/task/create',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(payload)
       } )


       if(!response.ok){
        throw new Error ('Failed to create a task')
       }

       const data = await response.json()
       alert(`Task Created`)

       setTitle('')
       setDescription('')
       setTag('')
      } catch(error){
        setError(error.message)


      } finally{
        setIsloading(false)
      

      }
    }
  return (
    <div >
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
        <button className='done'  onClick={handleSubmit}>DONE</button>
      </div>
    </div>
  )
}

export default MyTask
