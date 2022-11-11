import React from 'react'
import { Navbar } from 'react-bootstrap'
import About from './About/About'
import Animated from './Animated/Animated'
import Blogs from './Blogs/Blogs'
import Clients from './Clients/Clients'
import Community from './Community/Community'
import Features from './Features/Features'
import Inp from './Inp/Inp'
import Join_TWTZ from './Join_TWTZ/Join_TWTZ'
import Landing from './Landing/Landing'
import Shareholder from './Shareholder/Shareholder'
import Top_Navbar from './Top_Navbar/Top_Navbar'

function Index_main() {
  return (
    <div>
        <Top_Navbar/>
     <Navbar/>
     <Landing/>
     <Clients/>
     <Features/>
     <Inp/>
     <About/>
     <Join_TWTZ/>
     <Shareholder/>
     <Blogs/>
     <Community/>
     <Animated/>
    </div>
  )
}

export default Index_main