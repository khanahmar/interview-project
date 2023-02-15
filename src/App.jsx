import "./App.css"
import Comments from "./components/Comments"
import Footer from "./components/Footer"
import GetService from "./components/GetService"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import React from "react"

function App() {
  const [popup, setPopup] = React.useState(true)

  return (
    <div className="App">
      {popup && (
        <div className="popup">
          <div className="popCont">
            <div className="cencel">
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="emailCont">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="passCont">
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Sign Up</button>
          </div>
        </div>
      )}
      <Header />
      <Home />
      <Services />
      <GetService />
      <Comments />
      <Footer />
    </div>
  )
}

export default App
