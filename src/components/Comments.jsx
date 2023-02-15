import React from "react"
import "./comments.css"
import { Carousel } from "react-responsive-carousel"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const Comments = () => {
  return (
    <div className="commentsSection">
      <div className="commentsContainer">
        <div className="commentLeft">
          <div className="dataContainer">
            <div className="commentIcon">
              <i class="fa-solid fa-people-group"></i>
            </div>
            <h3>For Customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              vero modi ab, nostrum itaque, unde in voluptate rem, ipsam
              exercitationem dolorum minima sequi! Vitae ducimus, perspiciatis
              accusamus molestias adipisci itaque.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
              repudiandae. Possimus incidunt alias, iure quasi aliquam sit vero
              blanditiis exercitationem aspernatur magnam, animi tempora qui,
              asperiores obcaecati consequatur totam Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Sapiente, necessitatibus.
            </p>
          </div>
          <div className="dataContainer">
            <div className="commentIcon">
              <i class="fa-solid fa-person"></i>
            </div>
            <h3>For Customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              vero modi ab, nostrum itaque, unde in voluptate rem, ipsam
              exercitationem dolorum minima sequi! Vitae ducimus, perspiciatis
              accusamus molestias adipisci itaque.
            </p>
          </div>
        </div>
        <div className="commentRight">
          <Carousel
            className="carousel"
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop
          >
            <div className="div">
              <h2>Love In Comments</h2>
              <div className="imgcontainer">
                <img className="imgCont" src={img1} alt="" />
              </div>

              <h3>Neelum Muneer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                ipsam rerum? Possimus consequuntur corrupti officiis
                reprehenderit qui esse deserunt iusto atque quae impedit? Enim
                ab optio, eum nihil ducimus nulla?
              </p>
            </div>
            <div className="div">
              <h2>Love In Comments</h2>
              <div className="imgcontainer">
                <img className="imgCont" src={img2} alt="" />
              </div>

              <h3>Neelum Muneer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                ipsam rerum? Possimus consequuntur corrupti officiis
                reprehenderit qui esse deserunt iusto atque quae impedit? Enim
                ab optio, eum nihil ducimus nulla?
              </p>
            </div>
            <div className="div">
              <h2>Love In Comments</h2>
              <div className="imgcontainer">
                <img className="imgCont" src={img3} alt="" />
              </div>

              <h3>Neelum Muneer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                ipsam rerum? Possimus consequuntur corrupti officiis
                reprehenderit qui esse deserunt iusto atque quae impedit? Enim
                ab optio, eum nihil ducimus nulla?
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Comments
