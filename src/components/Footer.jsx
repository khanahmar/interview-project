import React from "react"
import "./footer.css"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="contacts">
          <div className="contact">
            <p>Connect with me on: </p>
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i class="fa-brands fa-google-plus-g"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i class="fa-brands fa-pinterest"></i>
            </span>
          </div>
          <div className="phoneEmail">
            <p className="phone">
              <i class="fa-solid fa-phone"></i> 111-222-333
            </p>
            <p className="email">
              <i class="fa-solid fa-envelope"></i> abcsd@gmail.com
            </p>
          </div>
        </div>
        <div className="rights">All Rights Reserved By Ahmar Khan © 2023</div>
      </div>
    </div>
  )
}
