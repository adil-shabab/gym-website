import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='row contact mb-5'>
        <div className="py-4 col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12 text-center">
            <p className="head stroke m-0">READY TO LEVEL UP</p>
            <p className="head stroke m-0">YOUR BODY WITH US?</p>
        </div>
        <div className="email px-5 col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <input className='input w-100' type="email" name="email" id="email" />
            <button className='but'>Join</button>
        </div>
    </div>
  )
}

export default Contact