import React from 'react'
import './Home.scss'
import HomeFace from '../../components/homeCompo/HomeFace'
import Category from '../Categories/Category'
import { useNavigate } from 'react-router-dom'
import HBanner from '../../components/Media Banner/HBanner'

function Home() {
  const navigate=useNavigate();
  return (
    <div className='Home'>
        <HomeFace/>
        <div className="collection container">
            <div className="info center">
                <HBanner head='Collects' desc='Shop from the best.'/>
            </div>
            <div className="content" onClick={()=>navigate('/productlist')}>
                <Category/>
                <Category/>
            </div>
        </div>
    </div>
  )
}

export default Home