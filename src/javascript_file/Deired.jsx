import React from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Deired = () => {
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
        <h2 className="offer">Dried Fruits </h2>
        <img src="/images/dryfruit.jpg" alt="Gift Card" className="image" />
        <p className="text">Naturally Delicious & Nutritious Dried Fruits </p>
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
        <h2 className="offer">Dried Vegetables</h2>
        <figure>
          <img
            src="/images/dryvegitable.jpg"
            alt="Gift Card"
            className="image"
          />
        </figure>
        <p className="text"> Freshness Preserved for Longer</p>
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
        <h2 className="offer">Spices</h2>
        <figure>
          <img src="/images/spicies.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text"> Elevate Every Dish with Rich Flavours</p>
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
        <h2 className="offer">Pulses and Legumes</h2>
        <figure>
          <img src="/images/pulses.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Wholesome & Protein-Rich Pulses & Legumes</p>
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
        <h2 className="offer">Dehydrated Herbs</h2>
        <figure>
          <img src="/images/oregano.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Aromatic, Flavorful & Ready to Use</p>
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
        <h2 className="offer">Processed Root Products </h2>
        <figure>
          <img src="/images/sweet.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text"> Nutrient-Rich & Ready for Versatile Use</p>
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

export default Deired;
