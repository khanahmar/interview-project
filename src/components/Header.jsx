import React, { useState } from "react"
import "./header.css"

const Header = () => {

  return (
    <div className="header">
      <div className="headerContainer">


        <div className="services">
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <p>ahmarkhan@gmail.com</p>
          </div>
          <div className="phone">
            <i class="fa-solid fa-phone"></i>
            <p>111-222-333</p>
          </div>
        </div>
        <div className="listServices">
          <i class="fa-sharp fa-regular fa-ballot"></i>
          <p>List Your Services For Free</p>
        </div>
      </div>
    </div>
  )
}

export default Header
