import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CareerCards";
import Particle from "../Particle";
import inter from "../../Assets/narayana.png";
import pvp from "../../Assets/pvp.png";
import school from "../../Assets/narayana.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">EDUCATION </strong>
        </h1>
        <p style={{ color: "white" }}>
         
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pvp}
              isBlog={false}
              title="Prasad V. Potluri Siddhartha institute of Technology"
              Study="Study : B.Tech - Computer Science and Engineering"  
              Year = "Year : 2019 - 2023"
              Achievement="Achievement : Reached Champion Stage at Coding Ninjas"
              website="https://www.pvpsiddhartha.ac.in/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inter}
              isBlog={false}
              title="Narayana Junior College"
                        Study="Study : Intermediate - MPC"  
                        Year = "Year : 2017 - 2019"
                        Achievement="Achievement : Secured AIR 725 in Jee Advance"
                        website="#" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="St. Francis English Medium School."
                        Study="Study : SSC"  
                        Year = "Year : 2016 - 2017"
                        Achievement="Achievement : Woned a Trophy in Cultural Activities"
                        website="#" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
