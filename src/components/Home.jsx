import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'
const Home = () => {
  return (

    <>
    <div className="main">
    <Navbar />
    <div className="home-container">
        <div className="small-heading">
            TRACK YOUR FRIENDS
        </div>
        <div className="middle-heading">
            Ready to change your <br/>lonelineness with new friends
        </div>
        <div className="last-heading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Lorem ipsum dolor sit amet.
        </div>
        <button>Get Started</button>
    </div>
    </div>
    </>
  )
}

export default Home
