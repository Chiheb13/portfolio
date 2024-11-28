import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FOODU"
              description="mobile application revolutionizes the food delivery experience, enabling users to order meals effortlessly. Built using Flutter for a responsive UI, it ensures excellent performance across devices and platforms with a dashboard admin."
              ghLink="https://github.com/Chiheb13/Food-delivery-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Service Linker"
              description="platform that connects users with service providers, allowing individuals to easily find, apply for, or offer services. It simplifies communication, enabling users to showcase their expertise or contact service owners directly"
              ghLink="https://github.com/Chiheb13/ServiceLinker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Player of the month"
              description="This project centers around a player voting competition module created with Laravel 10. Administrators have the ability to manage players and monthly competitions, while users can vote for their favorite players."
              ghLink="https://github.com/Chiheb13/player-of-the-month"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BookStore"
              description="An online bookstore where users can easily browse a wide selection of books, read detailed descriptions, and leave comments or reviews for the books they like, all built with React, TypeScript, and Laravel."
              ghLink="https://github.com/Chiheb13/bookstore-frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PFE-managment"
              description="Develop a Laravel-based platform to manage Final Year Projects (PFE) and streamline coordination between students, administrators, and supervisors"
              ghLink="https://github.com/Chiheb13/PFE-managment"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
