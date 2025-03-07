import React, { useEffect } from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";

const Woven = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contentent">
      <div className="box">
        <h2 className="offer">Cotton Fabrics</h2>
        <img src="/images/ruf .png" alt="Gift Card" className="image" />
        <p className="text">Comfort & Quality in Every Thread </p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Silk Fabrics</h2>
        <figure>
          <img src="/images/slik.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Timeless Beauty with a Silky Touch</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Polyester Fabrics</h2>
        <figure>
          <img src="/images/Polyester.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Style & Performance Combined</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Linen Fabrics</h2>
        <figure>
          <img src="/images/linen.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Natural Comfort with a Timeless Touch</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Blended Fabrics</h2>
        <figure>
          <img src="/images/blend.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">The Perfect Mix of Comfort & Style</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Knitted Stretch Fabrics </h2>
        <figure>
          <img src="/images/knitted.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Perfect Fit for Every Move</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Technical Textiles</h2>
        <figure>
          <img src="/images/technical.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Engineered for Advanced Applications</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Upholstery Fabrics</h2>
        <figure>
          <img src="/images/upho.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Elevate Comfort with Lasting Elegance</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Non-Woven Fabrics</h2>
        <figure>
          <img src="/images/non.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Engineered for Strength & Efficiency</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer"> Eco-Friendly Fabrics</h2>
        <figure>
          <img src="/images/eco.jpeg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Good for You, Better for the Planet</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>

      <div className="box">
        <h2 className="offer">Custom Printed Fabrics</h2>
        <figure>
          <img src="/images/custom.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Personalised Designs, Endless Possibilities</p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "https://forms.gle/a8n7uWEz8mVpnSfQ8";
          }}
        >
          Order Now→
        </button>
      </div>
      <button
        id="gobacktohome"
        onClick={() => {
          nav("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Woven;
