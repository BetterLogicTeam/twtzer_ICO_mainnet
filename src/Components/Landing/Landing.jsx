import React from 'react'
import "./Landing.css"
import {FaDiscord} from "react-icons/fa"
import {TfiReload} from "react-icons/tfi"
import {FaCreditCard} from "react-icons/fa"
function Landing() {
  return (
    <div>
    <div className="content">
      
      <div className="container mt-5">
        <div className="row">
            <div className=" col-lg-6 ">
<div className="info text-start">
    <small className="mb-5 rounded px-2 p-1 " style={{background:"#f7f4ff",color:"#5842bc"}}>Beta app release on Dec 20</small>
    <h1 className="mb-4 my-3">
    Why Be Centred 
    <span className='style-text'> Let's Build Twtzer </span>
     The DeSo
    </h1>
    <p className="text">
    We’re Building Twtzer - The All Decentralized Social Media Network that is unbiased and interoperable. Distributing 49% equity to initial holders for lifetime dividend
    </p>
    <div className="d-flex align-items-center mt-50 mb-5">
      <a href="http://" target="_blank" rel="noopener noreferrer" className='btn rounded-pill bg-blue4 fw-bold text-white me-4'>
        <small>
        <FaDiscord className='me-2 pe-2 fs-5 border-end'/>
          Join The Server
        </small>
      </a>
    </div>
    <span className=" me-5">
      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-1">
        <TfiReload/>
      </small>
      <small className="text-uppercase"> TWTZER BLOCKCHAIN</small>
    </span>
    <span className="me-5">
      <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-1">
        <FaCreditCard/>
      </small>
      <small className="text-uppercase"> TWTZ INTEGRATIONS</small>
    </span>
</div>
            </div>
            <div className="col-12 col-md-6">
              <img src="header_4.png" alt="" />
            </div>
        </div>
      </div>
    </div>
      <img src="header_4_wave.png" className='wave' alt="" />
    </div>
  )
}

export default Landing
