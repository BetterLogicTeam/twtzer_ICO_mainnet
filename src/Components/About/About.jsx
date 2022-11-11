import React from 'react'
import {BsTagFill} from "react-icons/bs"
import {TfiReload} from "react-icons/tfi"
import {FaTextWidth} from "react-icons/fa"
import "./About.css"
function About() {
  return (
    <div className='about mt-3 '>
      <div className="content frs-content" id='about'>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                    <div className="img-ipad mt-5 mb-lg-0">
                        <img src="ipad.png" className='top-wave' alt="" />
                        <div className="animated-360">
        <img src="about_s4_bubble.png" alt="" className='bubble' />
        <div className='back'>
          <img src="about_s4_lines.png" className='lines' alt="" />
        </div>
        
      </div>
                    </div>
                </div>
                <div className="col-lg-5 info-contant">
                    <div className="info">
                        <div className="section-head ">
                            <small className="title_small ">Power of Blockchain</small>
                            <h2 className="mb-3 mt-4">The Web3 <span>Social Media</span></h2>
                        </div>
                        <p className="text mb-4">
                        We are the first to enter the Decentralized Social Media zone with complete transparency,development authority and distributed ownership
                        </p>
                        <ul>
                            <li className="d-flex align-items-center mb-3"><small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3"><BsTagFill/></small> <h6 className="fw-bold">Open Source Media</h6></li>
                            <li className="d-flex align-items-center mb-3"><small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3"><TfiReload/></small> <h6 className="fw-bold">Open Source Media</h6></li>
                            <li className="d-flex align-items-center "><small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3"><FaTextWidth/></small> <h6 className="fw-bold">Open Source Media</h6></li>
                        </ul>
                        <a href="" className="btn rounded-pill bg-blue4 fw-bold text-white mt-5"><small>Join Community</small></a>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
     
     
    </div>
  )
}

export default About
