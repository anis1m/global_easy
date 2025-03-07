import React from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Card = () => {
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
        <h2 className="offer">Rubber Seals and Gaskets</h2>
        <img src="/images/gasket.png" alt="Gift Card" className="image" />
        <p className="text">
          Durable & Reliable Rubber Seals Precision Engineered{" "}
        </p>
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
        <h2 className="offer">Custom Rubber Mouldings</h2>
        <figure>
          <img src="/images/solid.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Precision-Crafted Custom Rubber Mouldings Engineered for Excellence
        </p>
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
        <h2 className="offer">Anti-Vibration Mounts</h2>
        <figure>
          <img src="/images/anti.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Reliable & Durable Anti-Vibration Mounts – Reducing Noise
        </p>
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
        <h2 className="offer">Rubber Hoses and Tubing</h2>
        <figure>
          <img src="/images/poly.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Flexible & Durable Rubber Hoses Tubing Engineered Peak Performance
        </p>
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
        <h2 className="offer">Polymer Components</h2>
        <figure>
          <img src="/images/pol.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Polymer Components Precision Engineered for Versatility
        </p>
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
        <h2 className="offer">O-Rings and Sealing </h2>
        <figure>
          <img src="/images/o.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Reliable Leak-Proof O-Rings Sealing Solutions Precision for Every
          Application
        </p>
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
        <h2 className="offer">Rubber Sheets and Rolls</h2>
        <figure>
          <img src="/images/rubber.jpeg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          High-Quality Rubber Sheets & Rolls – Durable, Flexible Built to
          Perform
        </p>
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
        <h2 className="offer">Foam Rubber Products</h2>
        <figure>
          <img src="/images/foam.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Lightweight Foam Rubber Products Perfect for Cushioning Insulation
        </p>
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
        <h2 className="offer">Silicone Rubber Products</h2>
        <figure>
          <img src="/images/silicon.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">
          Versatile & Heat-Resistant Silicone Rubber Products
        </p>
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
        <h2 className="offer"> Elastomers</h2>
        <figure>
          <img src="/images/el.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Durable & Reliable High-Performance Elastomers</p>
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
        <h2 className="offer">Specialty Compounds</h2>
        <figure>
          <img src="/images/specil.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Advanced & Customised Specialty Compounds</p>
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

export default Card;
