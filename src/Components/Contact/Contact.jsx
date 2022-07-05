import './Contact.css'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w615m58', 'template_8r4wfva', form.current, '_ZF_lEXLnGlyO6WlC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='row contact mb-5'>
        <div className="py-4 col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12 text-center">
            <p className="head stroke m-0">READY TO LEVEL UP</p>
            <p className="head stroke m-0">YOUR BODY WITH US?</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="email px-5 col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <input className='input w-100' type="email" name="email" id="email" />
            <button className='but' type='submit'>Join</button>
        </form>
    </div>
  )
}

export default Contact