import React,{useState} from 'react'
import'../styles/NewT.css'


const NewTask = () => {
    const[item,setItem]=useState('');
    const[isEditing,setIsEditing]= useState(false)

    const handleEdit=()=>{
        setIsEditing(!isEditing)

    }
    const handleDelete=()=>{
        setItem('')
        setIsEditing(false)

    }
    const handleChange = (e)=>{
        setItem(e.target.value)
    }
  return (
    <div>
      <div>
        <div>
            <input className='box' readOnly type="text" placeholder='urgent' value={item} onChange={(e)=>setItem(e.target.value)} />
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
            <div>FINTEC WEBSITE UPDATE</div>
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus repellat alias 
            possimus eius numquam similique accusamus beatae aut qui!
        </div>
      </div>

      <div>
        <div>
            <input className='box' readOnly type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
            <div>FINTEC WEBSITE UPDATE</div>
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus repellat alias 
            possimus eius numquam similique accusamus beatae aut qui!
        </div>
      </div>

      <div>
        <div>
            <input className='box' readOnly type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
             <div>FINTEC WEBSITE UPDATE </div>
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus repellat alias 
            possimus eius numquam similique accusamus beatae aut qui!
        </div>
      </div>

      <div>
        <div>
            <input className='box' readOnly type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
            </div>FINTEC WEBSITE UPDATE <div>
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus repellat alias 
            possimus eius numquam similique accusamus beatae aut qui!
        
        </div>
      </div>
    </div>
  )
}

export default NewTask
