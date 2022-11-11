
import './App.css';
import About from './Components/About/About';
import Animated from './Components/Animated/Animated';
import Blogs from './Components/Blogs/Blogs';
import Clients from './Components/Clients/Clients';
import Community from './Components/Community/Community';
import Features from './Components/Features/Features';
import Inp from './Components/Inp/Inp';
import Join_TWTZ from './Components/Join_TWTZ/Join_TWTZ';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Shareholder from './Components/Shareholder/Shareholder';
import Top_Navbar from './Components/Top_Navbar/Top_Navbar';
import Twt from './Components/Twt/Twt';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import index_main from './Components/Index_main';
import Index_main from './Components/Index_main';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Index_main />} />
      <Route exact path="/Twt" element={<Twt/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
