import React from 'react'
import "./circle.css"

function Circle({ style, heading, para, isImg }) {
  return (
    <div>

      {/* <div className="circle" style={style}>
        <h1>{heading}</h1> 
        <p>{para}</p>
      </div> */}

      <div className="polygon">
        <div className="logo">
          <h1>By&Me</h1>
          <h2>Distro LLC</h2>
        </div>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
        <div className="heading">
          <h1>WEBSITE DESIGN </h1>
          <h1>WEBSITE DEVELOPMENT</h1>
          <h1>& MAINTENANCE</h1>
        </div>
      </div>
      <div className="down"></div>

    </div>
  )
}

export default Circle