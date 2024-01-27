import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css"; // Import your CSS file

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following:</p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email: contact@example.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>Phone: +1 123-456-7890</span>
          </div>
        </div>
        <div className="social-links">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/udi-rohini-55843a246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
