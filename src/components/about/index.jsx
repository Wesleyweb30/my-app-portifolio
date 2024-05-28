import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faBootstrap } from '@fortawesome/free-brands-svg-icons';

const About = () => (
  <>
    <Container className="my-3">
      <Row>
        <Col md={4}>
          <Image src="src/assets/perfil-portifolio.jpg" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h2>About</h2>
          <p>
            {"Hi, my name is Wesley Luan, I 'm a full-stack developer I love creating things to solve real-life problems for digital. I currently develop with springboot, react js and bootstrap"}
          </p>
          <p>
            My Skins Developer
            <div className="mt-3 d-flex gap-3">
              <FontAwesomeIcon icon={faReact} size="2x" className="mr-2" />
              <FontAwesomeIcon icon={faJava} size="2x" className="mr-2" />
              <FontAwesomeIcon icon={faBootstrap} size="2x" className="mr-2" />
            </div>
          </p>
        </Col>
      </Row>
    </Container>
  </>
);

export default About;
