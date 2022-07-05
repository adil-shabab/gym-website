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
            <a target='__blank' href="https://github.com/adil-shabab"><img src={Github} alt="" /></a>
            <a target='__blank' href="https://www.linkedin.com/in/adil-shabab-1948b2233/"><img src={Linkedin} alt="" /></a>
            <a target='__blank' href="https://www.instagram.com/adil___shabab_/"><img src={Instagram} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer