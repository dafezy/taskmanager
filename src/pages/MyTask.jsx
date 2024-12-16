import React, {useState} from 'react'
import'../styles/MyTask.css'

const MyTask = () => {
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [tag, setTag]= useState('')
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
    </div>
  )
}

export default MyTask