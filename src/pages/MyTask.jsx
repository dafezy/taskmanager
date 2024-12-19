import React, {useState} from 'react'
import'../styles/MyTask.css'

const MyTask = () => {
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [tag, setTag]= useState('')
    const [error, setError]= useState(null)
    const [isLoading, setIsLoading]= useState(false)

    const handleSubmit = async ()=>{
        setIsLoading(true)
        setError(null)

        try{
            const payload={
                taskTitle:title,
                description: description,
                tags:tag,
            }

            const response= await fetch('https://regback.onrender.com/api/task/create',{
                method: 'POST',
                Headers: {
                    'content-Type': 'application/json',

                },
                body: JSON.stringify(payload)
         } )

         if(!response.ok){
            throw new Error('failed to create task')
         }

         const data = await response.json()
         alert(`Task Created: ${data.message}`)
         setTitle('')
         setDescription('')
         setTag('')

        } catch(error){
            setError(error.message)

        } finally{
            setIsLoading(false)
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
        <button className='done' onClick={handleSubmit}>DONE</button>
      </div>
    </div>
  )
}

export default MyTask
