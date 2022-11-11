import React from 'react'
import "./Clients.css"
function Clients() {
  return (
    <div className='clients py-3' style={{background:"#f0eff5"}}>
    <div className="container">
<div className="text-center">
    <h5 className="fw-bold mb-5">
    <span className="color-blue4"> Partners </span>
      on the deck
    </h5>
</div>
<div className="clients-logos pb-5">

        <div className="row ">
            <div className="col-6 col-lg-2 my-4 my-lg-0"><a href=""><img src="1.png" className='client-logo' alt="" /></a></div>
            <div className="col-6 col-lg-2 my-4 my-lg-0"><a href=""><img src="2.png" className='client-logo' alt="" /></a></div>
            <div className="col-6 col-lg-2 my-4 my-lg-0"><a href=""><img src="3.png" className='client-logo' alt="" /></a></div>
            <div className="col-6 col-lg-2  my-4 my-lg-0"><a href=""><img src="4.png" className='client-logo' alt="" /></a></div>
            <div className="col-6 col-lg-2 my-4 my-lg-0"><a href=""><img src="5.png" className='client-logo' alt="" /></a></div>
            <div className="col-6 col-lg-2 my-4 my-lg-0"><a href=""><img src="6.png" className='client-logo' alt="" /></a></div>
        </div>
</div>
<hr className='m-0'/>
    </div>
      
    </div>
  )
}

export default Clients
