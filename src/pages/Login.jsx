import React, {useState} from 'react'

const Login = () => {
  return (
    <div>
      <input type="text" placeholder='username'/>
      <input type="text" placeholder='password' />
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login
