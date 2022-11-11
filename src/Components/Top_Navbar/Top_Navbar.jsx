import React from 'react'
import Twt from '../Twt/Twt'
import "./Top_Navbar.css";
import { Link } from 'react-router-dom';




function Top_Navbar() {
  return (
    <div className='top-navbar  ' >
    <div className="container ">
<div className="row">
    <div className="col-12">
    <div className="content text-white">
    <span className="btn sm-btn bg-white py-0 px-2 me-2 fs-10px">
        <small className='fs-10'>Bonus</small>
    </span>
    <img src="imoj_heart.png" alt="" className="icon-15" />
    <small className="op-10 fs-10px"> Join 49% IPO </small>
    <span className="op-6 text-muted fs-10px"> or lifetime equity for Initial buyers </span>
    <Link to="/Twt"><a href=""  className='text-white fs-10px'> Buy TWTZ</a></Link>
</div>
    </div>
</div>
    </div>
      
    </div>
  )
}

export default Top_Navbar
