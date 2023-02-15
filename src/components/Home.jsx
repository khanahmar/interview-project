import React from "react"
import "./home.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = (props) => {
  const { openPop } = props

  return (
    <div className="home">
      <div className="carousel">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          interval={3000}
        >
          <Box w={"100%"} h={"50vh"}>
            <Image
              objectFit={"cover"}
              src={img1}
              width="full"
              height={"full"}
            />
          </Box>
          <Box w={"100%"} h={"50vh"}>
            <Image
              objectFit={"cover"}
              src={img2}
              width="full"
              height={"full"}
            />
          </Box>
          <Box w={"100%"} h={"50vh"}>
            <Image
              objectFit={"cover"}
              src={img3}
              width="full"
              height={"full"}
            />
          </Box>
        </Carousel>
      </div>
      <div className="backcolor"></div>
      <div className="formContainer">
        <div className="formData">
          <div className="logoContainer">
            <div className="logo">EVENT MANAGEMENT</div>
            <div className="btns">
              <button onClick={openPop}>sign In</button>
              <button onClick={openPop}>sign Up</button>
            </div>
          </div>
          <div className="form">
            <h1>Give your Events a Royal Look</h1>
            <div className="formBtn">
              <button>See How It Works</button>
            </div>
            <div className="formInp">
              <input type="text" placeholder="Find location" />
              <input type="text" placeholder="Select services" />
              <button className="serachBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
