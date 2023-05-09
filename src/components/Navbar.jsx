import React from 'react'
import './css/Navbar.css'
const Navbar = () => {
  return (
    <>
    {/* <div className="top"> */}
    <div className="nav">
        <div className="container">
            <div className="logo">
                Findme
            </div>
            <div className="menu">
                <div className="item">Home</div>
                <div className="item">App</div>
                <div className="item">Blog</div>
                <div className="item">About Us</div>
            </div>
            <div className="right">
                <button>Get a App</button>
            </div>
        </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default Navbar
