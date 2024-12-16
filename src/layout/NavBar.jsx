import React from 'react'
import '../styles/NavBar.css'
import{Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div >
        <div className='nav'>
        <Link to="/CoverPage"><button><h4>
            Task Duty
            
        </h4></button></Link>
        <div className='right'>
        <div className='navF'>
        <Link to="/MyTask"> <button><h4>
            New Task
        </h4></button> </Link>

        <Link to="/NewTask"><button><h4>
            All Task
        </h4></button></Link>
        </div>
        </div>
        </div>

        
    
    </div>

    
  )
}

export default NavBar
