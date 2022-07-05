import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer px-5'>
        <hr />
        <div className="flex d-flex justify-content-center align-items-center">
            <img src={Github} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
        </div>
    </div>
  )
}

export default Footer