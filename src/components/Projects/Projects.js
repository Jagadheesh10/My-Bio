import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf1.png";
import emotion from "../../Assets/Projects/chain.png";
import editor from "../../Assets/Projects/portfolio.png";
import car from "../../Assets/Projects/robotcar.png";
import security from "../../Assets/Projects/sec.png";
import processor from "../../Assets/Projects/processor.png";

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
              imgPath={car}
              isBlog={false}
              title="Arduino Robot Car"
              description="A arduino robot car using arduino uno and arduino software as well as hardware components. It is controlled wirelessly its directions and motion."
              ghLink="https://github.com/Jagadheesh10/Bonk/tree/main/Project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={processor}
              isBlog={false}
              title="Processor Guru"
              description="This Project is about Processor which is related to mobile's and Laptops the main advantage of this site we use to compare the processors between and we also want upgrade it for comp 3.And we also give the info about those processors and also provide the rating by TOP reviewers."
              ghLink="https://github.com/Jagadheesh10"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My Portfolio"
              description="This web page is done entirely with react.js, This web page is about My self like what i have done during my graduation and what the skills i have developed my self and about my education background and the projects i have done and what the tools i have used to build projects and coding related things"
              ghLink="https://github.com/Jagadheesh10/My-Bio"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crop disease detection"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Jagadheesh10/Crop-disease-detection-using-Deep-Cnn/tree/main/Src"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Password Strength"
              description="This project is realted to the security where we integrated the hasing if the password is 100% strength then we call the function of Hashing. And this output of hashing inspired by MD5 Algo, Hence this phenomenon cant be Exploited by the brute force attackers."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="vehicle Health Tracking"
              description="This project is mainly contributed with Blockchain Tech. The theme of the project is it tracks the vehicle details accurately 
              if the vehicle gets sold the buyer can see the entire details from the 1st service.. what had modified etc.. for this i have used Etherium crypto currency for transactional purpose the tools i have used are 
              remix ide, ganache, metamask"
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
