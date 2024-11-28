import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">YAHYA Chiheb</span>, an IT Student & Junior Developer with a passion for software development. I specialize in creating efficient apps and websites and stay updated with the latest technology trends.<br />
            Outside of coding, I enjoy:<br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Practing Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
