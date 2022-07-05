import React from 'react'
import './Why.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'

const Why = () => {
  return (
    <div className='row py-5 mt-5 px-3'>
        <div className="d-flex justify-content-center align-items-center col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12">
            <div className="images">
                <div className="section-1 px-2">
                    <img data-aos='slide-right' className='first-img' src={image1} alt="" />
                </div>
                <div className="section-2 px-2">
                    <div className="part-1">
                        <img src={image2} alt="" />
                    </div>
                    <div className="part-2 pt-2">
                        <div className="box-1">
                            <img data-aos='slide-right' className='small-img' src={image3} alt="" />
                        </div>
                        <div className="box-2">
                            <img data-aos='slide-left' className='small-img' src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-white right-w d-flex flex-column col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12">
            <span style={{color: 'var(--orange)'}}>SOME REASONS</span>
            <p className="head"><span className="stroke">WHY</span> CHOOSE US ?</p>
            <div className="line">
                <img src={tick} alt="" />
                <p>OVER 140+ EXPERTS COACHS</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>1 FREE PROGRAM FOR NEW MEMBER</p>
            </div>
            <div className="line">
                <img src={tick} alt="" />
                <p>RELIABLE PARTNERS</p>
            </div>
            <p className='mt-5'>OUR PARTNERS</p>
            <div className="brands">
                <img data-aos='slide-up' src={adidas} alt="" />
                <img data-aos='slide-down' src={nike} alt="" />
                <img data-aos='slide-up' src={nb} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Why