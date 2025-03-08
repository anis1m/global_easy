import React, { useRef } from "react";
import "../css_files/Metropage.css";

const Metroopage = () => {
  const linkref = useRef();

  return (
    <div className="metro-container">
      <nav className="navbar">
        <img
          src="/images/logo.jpeg"
          style={{ width: "250px", height: "75px" }}
        ></img>

        <aside>
          <ul className="nav-links" ref={linkref}>
            <li>
              {" "}
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              {" "}
              <a href="#homecontainer">Servics</a>
            </li>
            <li>
              <a href="#foter">Contact US</a>
            </li>
            <li>
              <a href="#foter">Connect US</a>
            </li>
          </ul>
        </aside>
        <i
          class="fa-solid fa-bars-staggered"
          style={{ fontSize: "2.5rem", cursor: "pointer", display: "none" }}
          onClick={() => {
            if (linkref.current.style.display === "flex") {
              linkref.current.style.display = "none";
            } else {
              linkref.current.style.display = "flex";
            }
          }}
        ></i>
      </nav>
      <header className="hero-section">
        <figure>
          <img src="/images/gl.jpeg" />

          <div className="hero-content">
            <h1>Easy Global Connect</h1>
            <h3>Bridging Borders, Building Futures</h3>
            <blockquote>
              <p>
                At Easy Global Connect, our vision is to revolutionize global
                trade by crafting a seamless, sustainable, and customer-centric
                ecosystem. We envision system where every transaction not only
                connects buyers and suppliers but also consistently exceeds
                customer expectations, fostering long-term relationships built
                on trust, quality, and mutual growth. Through our relentless
                pursuit of excellence and customer satisfaction
              </p>
            </blockquote>
          </div>
        </figure>
      </header>
    </div>
  );
};

export default Metroopage;
