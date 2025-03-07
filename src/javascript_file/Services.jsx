import React from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Services = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contentent" id="contentent">
      <div className="box">
        <h2 className="offer">ISO 9001 Certification</h2>
        <img src="/images/9001.png" alt="Gift Card" className="image" />
        <p className="text">Your Path to Quality & Trust </p>
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
        <h2 className="offer"> ISO 14001 Certification</h2>
        <figure>
          <img src="/images/1400.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Commit to a Sustainable Future</p>
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
        <h2 className="offer">ISO 45001 Certification</h2>
        <figure>
          <img src="/images/45001.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Building a Healthier Workplace</p>
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
        <h2 className="offer">ISO 22000 Certification </h2>
        <figure>
          <img src="/images/2200.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Trust in Every Bite</p>
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
        <h2 className="offer">ISO 27001 Certification </h2>
        <figure>
          <img src="/images/2700.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Trust Through Information Security</p>
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
        <h2 className="offer"> ISO 13485 Certification </h2>
        <figure>
          <img src="/images/1348.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text"> Excellence in Medical Manufacturing</p>
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
        <h2 className="offer">Training & Workshops</h2>
        <figure>
          <img src="/images/workshop.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text"> Knowledge That Drives Excellence</p>
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
        <h2 className="offer">Internal Audit Services</h2>
        <figure>
          <img src="/images/internal.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Precision, Insight & Improvement</p>
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
        <h2 className="offer">Consultancy Improvement</h2>
        <figure>
          <img
            src="/images/improvement.png"
            alt="Gift Card"
            className="image"
          />
        </figure>
        <p className="text">Strategic Solutions for Growth</p>
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
        <h2 className="offer"> Compliance Audits</h2>
        <figure>
          <img src="/images/Audits.png" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Stay Aligned, Stay Ahead</p>
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
        <h2 className="offer">Business Process </h2>
        <figure>
          <img src="/images/bussnes.jpg" alt="Gift Card" className="image" />
        </figure>
        <p className="text">Smart Strategies for Better Results</p>
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

export default Services;
