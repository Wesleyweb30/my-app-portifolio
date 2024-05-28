import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <>
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#home">Wesley Luan</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="https://github.com/Wesleyweb30" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
        <Nav.Link href="https://linkedin.com/in/seu-usuario" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </>
);

export default Header;
