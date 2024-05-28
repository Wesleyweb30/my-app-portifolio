import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardSkin = ({ title, description, imgSrc, link }) => (
  <Card>
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={link} target="_blank">Ver Projeto</Button>
    </Card.Body>
  </Card>
);

export default CardSkin;
