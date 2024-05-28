import { Carousel } from 'react-bootstrap';

const ProjectCarousel = () => (
  <Carousel className="my-5">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="projeto1.jpg"
        alt="Primeiro Projeto"
      />
      <Carousel.Caption>
        <h3>Primeiro Projeto</h3>
        <p>Descrição do projeto.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="projeto2.jpg"
        alt="Segundo Projeto"
      />
      <Carousel.Caption>
        <h3>Segundo Projeto</h3>
        <p>Descrição do projeto.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default ProjectCarousel;
