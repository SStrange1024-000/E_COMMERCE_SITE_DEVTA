import React from 'react';
import './CreateUserAccount.scss'
import img11 from '../../asset/Couple.png'
import { Link } from 'react-router-dom';
import ProductImage from '../../components/Product/ProductImage';

function CreateUserAccount() {
  return (
    <div className="CreateUserAccount">
        <div className="createUserContainer center">
            <div className="title">
                <h2>Create Account</h2>
            </div>
            <form >
                <input type="text" placeholder='First Name' className='inputStyle'/>
                <input type="text" placeholder='Last Name' className='inputStyle'/>
                <input type="text" placeholder='Country' className='inputStyle' />
                <input type="email" placeholder='Email' className='inputStyle' required />
                <input type="email" placeholder='Confirm Email' className='inputStyle' required />
                <input type="password" placeholder='Password' className='inputStyle' />
                <input type="password" placeholder='Confirm Password' className='inputStyle' />
                <button className='hoverLink2'>Register</button>
            </form>
            <p> Login here : <Link to='/login'>login</Link></p>
        </div>
        <div className="image center">
            <ProductImage src={img11}/>
        </div>
    </div>
  )
}

export default CreateUserAccount