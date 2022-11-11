import React from 'react'
import "./Animated.css"
function Animated() {
  return (
    <div>
      <footer class="style-4 " data-scroll-index="8">
        <div class="container">
         
            <div class="foot mt-80">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-sm-12">
                        <div class="logo">
                            <img src="logo_lgr.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-8 col-sm-12 mt-4">
                        <ul class="links d-flex-grid ">
                            <li class="mb-3 mt-2 text-start">
                                <a href="#0" className='text-decoration-none text-dark ' data-scroll-nav="1">DESO APP</a>
                            </li>
                            <li class="mb-3 mt-2 text-start">
                                <a href="#0" className='text-decoration-none text-dark ' data-scroll-nav="2"> TWTZ</a>
                            </li>
                            <li class="mb-3 mt-2 text-start">
                                <a href="Whitepaper.pdf" className='text-decoration-none text-dark ' >WHITEPAPER</a>
                            </li>
                            <li class="mb-3 mt-2 text-start">
                                <a href="#0" className='text-decoration-none text-dark ' data-scroll-nav="4">BLOG</a>
                            </li>
                            <li class="mb-3 mt-2 text-start">
                                <a href="#" className='text-decoration-none text-dark ' > AUDIT </a>
                            </li>
                            <li class="mb-3 mt-2 text-start">
                                <a href="#" className='text-decoration-none text-dark ' >JOIN SERVER</a>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-12 my-4">
                        <div class="dropdown">
                            <button class="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="lang.png" alt="" class="me-2 w-25"/>
                                <small>English</small>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">English</a></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="copywrite text-center pt-5">
                <small class="small  ">
                    © 2022 Copyrights by twtzer All Rights Reserved. Designed with Twtzer Blockchain Future.
                </small>
            </div>
        </div>
        <div className='ocean'>
         <img src="footer_4_wave.png" alt="" className="wave"/>
         </div>
    </footer>
   
    </div>
  )
}

export default Animated
