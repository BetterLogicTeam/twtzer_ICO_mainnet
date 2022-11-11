import React from 'react'
// import { FaDiscord} from 'react-icon/fa';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import "./Community.css"
function Community() {
  return (
    <div className='community'>
      <div className="container">
        <div className="section-head">
            <small className="title-small">Notero Community</small>
            <h2 className="my-4">Join Into <span>Our Hub</span></h2>
        </div>
        <div className="content my-4">
            <div className="row border p-3">
                <div className="col-lg-4">
                <div className="card mb-3 border-start-0 border-bottom-0 border-top-0" >
  <div className="row g-0">
    <div className="col-md-4">
    
      <FaDiscord className='fonticon'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fw-bold">Discord</h5>
        <p className="card-text">Open Source & Commnit Code</p>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-lg-4">
                <div className="card mb-3 border-start-0 border-bottom-0 border-top-0" >
  <div className="row g-0">
    <div className="col-md-4">
     <BsTwitter className='fonticon'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fw-bold">Discord</h5>
        <p className="card-text">Open Source & Commnit Code</p>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-lg-4">
                <div className="card mb-3 border-0" >
  <div className="row g-0">
    <div className="col-md-4">
   < SiTelegram className='fonticon'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fw-bold">Discord</h5>
        <p className="card-text">Open Source & Commnit Code</p>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Community
