import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'



function Login() {
    const navigate=useNavigate();
  return (
    <div className='Login'>
        <div className="loginContainer center">
            <div className="title center">
                <h2>Sign In</h2>
            </div>
                <form >
                    <input type="email" placeholder='Email' className='inputStyle'/>
                    <input type="password" placeholder='Password' className='inputStyle'/>
                    <button className='hoverLink'>Sign In</button>
                    <h2>OR</h2>
                    <button className='hoverLink2' onClick={()=>navigate('/signup')}>Create Account</button>
                </form>
            
        </div>
    </div>
  )
}

export default Login