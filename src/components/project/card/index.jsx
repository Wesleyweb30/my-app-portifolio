import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ title, description, imgSrc, link }) => (
  <Card style={{ width: '18rem' }} className="m-3">
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
        <div className="mt-3">
          <FontAwesomeIcon icon={faReact} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faJava} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faBootstrap} size="2x" className="mr-2" />
        </div>
      </Card.Text>
      <Button variant="primary" href={link} target="_blank">Ver Projeto</Button>
    </Card.Body>
  </Card>
);

export default ProjectCard;
