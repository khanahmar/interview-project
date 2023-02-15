import React from "react"
import "./getservice.css"

const GetService = () => {
  return (
    <div className="getservice">
      <div className="getServiceContainer">
        <div className="leftCol">
          <h3 className="heading">How Book Services ?</h3>
          <div className="serviceIconContainer">
            <div className="serviceIcons">
              <div className="serviceIcon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3>Search Services</h3>
              <p>
                Search review short list and share the Best Banquet halls party
                halls near you
              </p>
            </div>
            <div className="serviceIcons">
              <div className="serviceIcon">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <h3>Search Services</h3>
              <p>
                Search review short list and share the Best Banquet halls party
                halls near you
              </p>
            </div>
            <div className="serviceIcons">
              <div className="serviceIcon">
                <i class="fa-solid fa-square-check"></i>
              </div>
              <h3>Search Services</h3>
              <p>
                Search review short list and share the Best Banquet halls party
                halls near you
              </p>
            </div>
          </div>
        </div>
        <div className="rightCol">
          <h4>Watch Video</h4>
          <div className="rightColContainer"></div>
        </div>
      </div>
    </div>
  )
}

export default GetService
