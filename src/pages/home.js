import hero from "../assets/images/hero-image.jpg";
import saddle from "../assets/images/saddle-bags.jpg";
import gears from "../assets/images/riding-gear.jpg";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<luggage />}></Route>
      </Routes>
      <div className="body-container">
        <div className="hero-image">
          <img
            className="hero-image responsive-img"
            src={hero}
            alt="A guy with Motorcylce"
          />
        </div>
        <div className="landing-section mt-16 flex-center">
          <div>
            <Link to="/luggage">
              <figure className="avatar">
                <img src={saddle} />
              </figure>
              <p className="category mt-8 fs-8">Luggage</p>
            </Link>
          </div>
          <div>
            <Link to="/riding-gear">
              <figure className="avatar">
                <img src={gears} alt="A guy/girl with Riding-Gears" />
              </figure>
              <p className="category mt-8 fs-8">Riding Gears</p>
            </Link>
          </div>
        </div>
        <div className="footer"></div>
      </div>{" "}
    </div>
  );
}

export default Home;
