import React from 'react'
import "./Blogs.css"
function Blogs() {
  return (
    <div className='blog'>
      <div className="container my-4">
        <div className="section-head mb-5">
            <h2 className='mb-3 fw-bold'>Latest from our <span className='bg-img' style={{backgroundImage:"shap_style_6.png"}}><small>magazine</small></span></h2>
            <p className='color-666' style={{fontWeight:"600",color:"#666",fontSize:"24px"}}>Read our blogs and covers</p>
        </div>
        <div className="content">
            <div className="row">
            <div className="col-lg-4">
            <div className="card border-start-0 border-top-0 border-bottom-0" >
  <img src="9.png" className="card-img-top px-4" alt="..."/>
  <div className="card-body text-start">
    <h6 className="card-title color-blue4 fw-bold">NEWS</h6>
    <p className="card-text fw-bold">Elon Musk’s Twitter Takeover Follows the Inception...</p>
    
  </div>
</div>
</div>
            <div className="col-lg-4">
            <div className="card border-start-0 border-top-0 border-bottom-0" >
  <img src="10.png" className="card-img-top px-4" alt="..."/>
  <div className="card-body text-start">
    <h6 className="card-title color-blue4 fw-bold">UPDATE</h6>
    <p className="card-text fw-bold">Quick Guide On What Is Decentralized Social (DeSo)?</p>
    
  </div>
</div>
            </div>
            <div className="col-lg-4">
            <div className="card border-start-0 border-top-0 border-bottom-0" >
  <img src="11.png" className="card-img-top px-4" alt="..."/>
  <div className="card-body text-start">
    <h6 className="card-title color-blue4 fw-bold">NEWS</h6>
    <p className="card-text fw-bold">Twtzer IPO for 49% equity via TWTZ will be live on 10th Nov</p>
    
  </div>
</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
