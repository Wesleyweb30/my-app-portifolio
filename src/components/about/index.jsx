import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from '@react-spring/web';
import './about.css';

export default function About() {
  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const iconSprings = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  return (
    <>
    <Container className="my-3 p-4 bg-body-tertiary" >
      <Row>
        <Col md={4}>
          <Image src="src/assets/perfil-portifolio.jpg" roundedCircle fluid />
        </Col>

        <Col md={8}>
          <section>
            <Container fluid>
              <animated.h2 style={springs} className="about-title">About</animated.h2>
              <animated.p style={springs} className="about-text">
                Hi, my name is Wesley Luan. I am a full-stack developer. I love creating things to solve real-life problems for digital. I currently develop with Spring Boot, React.js, and Bootstrap.
              </animated.p>

              <animated.div style={iconSprings} className="mt-3 d-flex align-items-center gap-3">
                <h4 className="skills-title">My Social Media</h4>
                <a href="https://github.com/Wesleyweb30" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
                </a>
              </animated.div>
            </Container>
          </section>
        </Col>
      </Row>
    </Container>
    </>
  );
}
