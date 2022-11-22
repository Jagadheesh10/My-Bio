import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jagadheeswar Thokala </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />Pursuing my Engineering Graduation (4th Year) in stream of CSE- Computer Science & Engineering
            <br />
            <br />
            Apart from coding, What i do at free time..!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies(related to Quantum physics)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never focus on rewards while paying your efforts"{" "}
          </p>
          <footer className="blockquote-footer">Eswar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
