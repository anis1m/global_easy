import React, { useEffect } from "react";
import "../css_files/Footer.css";

function Footer() {
  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="footer" id="foter">
      <footer>
        <blockquote>
          <h3>Products and Support</h3>
          <p>
            {" "}
            - Engineering Rubber & Polymer, EV &<br></br>Electronics Components
          </p>
          <p>- Dried & Process Food & / Root Products</p>
          <p>- Woven and Knitted Fabric Products</p>
          <p>- ISO Certifications and Business Excellence</p>
        </blockquote>
        <blockquote>
          <h3>Company Information</h3>
          <p>
            {" "}
            Registered Address as per record<br></br> available in Registar of
            <br></br> Companies office: F 803 ERR, Kashid Park,<br></br> Pimle
            Gurav, Pune 411 061. MH. India
          </p>
        </blockquote>

        <blockquote>
          <h3>Contact US</h3>
          <p>
            {" "}
            <i class="fa-solid fa-phone "></i> Cell : +91-9922 925 855
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-envelope"></i> Email :
            easyglobalconnects@gmail.com
          </p>
          <p>
            <a
              href="https://wa.me/919922925855?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
              className="mail"
            >
              {" "}
              <i class="fa-brands fa-square-whatsapp"></i> WHATSAPP : Connect Us
            </a>{" "}
          </p>
        </blockquote>

        <blockquote>
          <br />

          <p>
            <a href="mailto:easyglobalconnects@gmail.com" className="mail">
              <i class="fa-solid fa-desktop"></i> OUR WEBSITE{" "}
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/company/106591839/admin/dashboard/"
              className="mail"
            >
              {" "}
              <i class="fa-brands fa-linkedin"></i> EASY GLOBAL LINKEDIN.com
            </a>
          </p>

          <p>
            <a
              href="https://www.indiamart.com/company/16770388/"
              className="mail"
            >
              {" "}
              <i class="fa-solid fa-window-restore fa-lg"></i> India Mart{" "}
            </a>
          </p>

          <p>
            <a href="https://forms.gle/a8n7uWEz8mVpnSfQ8" className="mail">
              {" "}
              <i class="fa-solid fa-circle-user"></i> Enquire Now{" "}
            </a>
          </p>
        </blockquote>
      </footer>
    </div>
  );
}

export default Footer;
