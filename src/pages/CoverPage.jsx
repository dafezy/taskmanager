import React from 'react'
// import NavBar from '../layout/NavBar'
import'../styles/CoverPage.css'
import coverImage from '../images/Component 1.png'

const CoverPage = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <h1></h1>
        <div className='body'>
        <div>
            <h1>Mange your task on <span className='blue'>TaskDuty</span></h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
             expedita quas mollitia fuga molestias voluptatum, ex quos autem
              iste voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Adipisci molestiae voluptates, itaque possimus laboriosam non quos
                impedit, nulla alias praesentium sapiente pariatur! Natus, repudiandae rerum qui nobis, esse assumenda maxime delectus recusandae reiciendis saepe soluta. Itaque praesentium nam dignissimos officia nesciunt ducimus 
              sit quibusdam? Sit velit hic voluptate aut non.
              
              <br /><button className='bluer'>go to my task</button>
         </div>
             
              
        <div className='image'>
        <img src={coverImage} alt="" />
        </div>
      
        </div>
      
    </div>
  )
}

export default CoverPage
