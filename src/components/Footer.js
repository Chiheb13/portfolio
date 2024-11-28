import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Chiheb13"
                style={{ color: "white" }}
                target="_blank" 
                rel="yahya chiheb"
              >
                <AiFillGithub
      style={{
        border: "2px solid white",  
        borderRadius: "50%",        
        padding: "5px",           
        fontSize: "30px",            
      }}
    />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chiheb-yahya-3b0534282/"
                style={{ color: "white" }}
                target="_blank" 
                rel="yahya chiheb"
              >
                <FaLinkedinIn style={{
        border: "2px solid white",  
        borderRadius: "50%",        
        padding: "5px",           
        fontSize: "30px",            
      }} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
