import React, { useEffect, useRef } from "react";
import "../css_files/About.css";

function About() {
  const aboutusref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target;
          console.log(div);
          div.style.transform = "translateX(0px)";
          div.style.transition = "transform 2s ease";

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(observe, options);

    if (aboutusref.current) {
      observer.observe(aboutusref.current);
    }

    return () => {
      if (aboutusref.current) {
        observer.unobserve(aboutusref.current);
      }
    };
  }, []);
  return (
    <section id="aboutus" style={{ width: "100%", overflow: "hidden" }}>
      <div className="about-us" ref={aboutusref}>
        <figure>
          <img src="/images/about.jpeg" />
        </figure>
        <aside>
          <blockquote style={{ width: "70%", margin: "0 auto" }}>
            <h1>About Us</h1>
            <h1>@ Easy Global Connect</h1>
          </blockquote>
          <blockquote>
            <p>
              we are passionate about bridging the gap between international
              buyers and Indian suppliers. Our journey began with a simple yet
              powerful idea: to make global trade easier, more reliable, and
              sustainable.<br></br>
              <br></br>
              We specialize in connecting businesses worldwide with high-quality
              Indian products across diverse sectors, including engineering
              rubber & polymer products, dried processed foods, woven textiles,
              and ISO certification services. Our team is dedicated to providing
              seamless export solutions, ensuring that every transaction is
              smooth, efficient, and transparent. We believe in fostering
              long-term relationships built on trust, quality, and mutual
              growth.
            </p>

            <h1> Our Goal</h1>
            <p>
              Our primary goal is to establish Easy Global Connect as a leading
              facilitator of international trade, recognized for its commitment
              to quality, reliability, and ethical sourcing practices. We aim to
              empower businesses globally by providing them with access to
              premium Indian products and services, while contributing
              positively to the economic and social development of our
              communities
            </p>
          </blockquote>
          <blockquote style={{ flexDirection: "row" }}></blockquote>
        </aside>
      </div>
    </section>
  );
}

export default About;
