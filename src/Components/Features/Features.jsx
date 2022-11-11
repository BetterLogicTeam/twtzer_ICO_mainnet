import React from 'react'
import "./Features.css"
function Features() {
  return (
    <div className='features pt-5 pb-5'  style={{background:"#f0eff5"}}>
    <div className="container">
        <div className="section-head ">
            <small className="title_small bg-white mb-3">Awesome</small>
            <h2 className="mb-5">
            The DeSo Network <span>For You</span>
            </h2>
        </div>
        <div className="content row justify-content-around">
            <div className="features-card col-12 col-lg-2">
                <div className="icon img-contain">
                <img src="fe1.png" alt="" />
                </div>
                <h6>Decentralized</h6> </div>
            <div className="features-card col-12 col-lg-2">
                <div className="icon img-contain">
                <img src="fe2.png" alt="" />
                </div>
                <h6>Open Source</h6> </div>
            <div className="features-card col-12 col-lg-2">
                <div className="icon img-contain">
                <img src="fe3.png" alt="" />
                </div>
                <h6>Unbiased</h6> </div>
            <div className="features-card col-12 col-lg-2">
                <div className="icon img-contain">
                <img src="fe4.png" alt="" />
                </div>
                <h6>Interoperable</h6> </div>
            <div className="features-card col-12 col-lg-2">
                <div className="icon img-contain">
                <img src="fe5.png" alt="" />
                </div>
                <h6>Distributed Equity</h6> </div>
        </div>
      
    </div>
      <img src="feat_circle.png" alt="" className='img-circle'/>
    </div>
  )
}

export default Features
