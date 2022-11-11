import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-md-white style-4 ">
        <div className="container">
          <a
            className="navbar-brand text-start w-25"
            
            href="#"
          >
            <img src="logo_lgr.png" className="w-50" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  DESO APP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TWTZ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WHITEPAPER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  AIRDROP
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-info brd-gray hover-blue4  rounded-pill" type="submit">
              <span>
                Join Server
                <AiOutlineDownload className="ms-2" />
              </span>
            </button>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
