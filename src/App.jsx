import "./App.css"
import Comments from "./components/Comments"
import Footer from "./components/Footer"
import GetService from "./components/GetService"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import React, { useState } from "react"
import { faL } from "@fortawesome/free-solid-svg-icons"

function App() {
  const [popup, setPopup] = React.useState(false)

  function openPop() {
    setPopup(true)
  }

  function closePop() {
    setPopup(false)
  }

  return (
    <div className="App">
      {popup && (
        <div className="popup">
          <div className="popCont">
            <div className="cencel">
              <i onClick={() => closePop(popup)} class="fa-solid fa-xmark"></i>
            </div>
            <div className="emailCont">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="passCont">
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Sign In</button>
          </div>
        </div>
      )}
      <Header />
      <Home openPop={openPop} />
      <Services />
      <GetService />
      <Comments />
      <Footer />
    </div>
  )
}

export default App
