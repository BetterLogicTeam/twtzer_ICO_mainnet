import React from 'react'
import "./Shareholder.css"
import {BsListUl} from "react-icons/bs"
function Shareholder() {
  return (
    <div className='shareholder '>
      <div className="container my-4">
        <div className="content">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-head"><small className="title-small">DeSo Token</small><h2 className="mb-3">Hodl TWTZ - Be A <br /> <span>Shareholder</span></h2></div>
                    <p className="text mb-5">The first DeSo token with network integration and distributed public equity</p>
                    <div className="numbs row justify-content-between">
                        <div className="num-card col-5 border-end-2"><div className="icon img-contain"><img src="testi_s4_ic1.png" alt="" className='mb-4' /></div><h2 className='color-blue4'>1.32B+</h2><p style={{color:"#666",fontSize:"12px"}}>Total supply and shares of TWTZ</p></div>
                        <div className="num-card col-5"><div className="icon img-contain"><img src="testi_s4_ic2.png" alt="" className='mb-4' /></div><h2 className='color-blue4'>49%</h2><p style={{color:"#666",fontSize:"12px"}}>Public Equity on IPO & shared lifetime dividend</p></div>
                    </div>
                    <div className="d-flex align-items-center mt-5">
                        <a href="" target="_blank" className="btn rounded-pill bg-blue4 fw-bold text-white me-4"> <small> Join IPO, Become partner </small></a>
                        <a href="" className="play-btn text-decoration-none "><span className="icon me-2"><BsListUl/></span><strong className="small text-dark">Read whitepaper</strong></a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="testi-cards">
                        <img src="coin.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Shareholder
