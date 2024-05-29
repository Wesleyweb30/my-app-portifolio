import Header from './components/header'
import About from './components/about';
import { Container, Row, Col } from 'react-bootstrap';
// import ProjectCarousel from './components/carousel';
// import ProjectCard from './components/project/card';
// import ContactForm from './components/contact/form';

const App = () => (
  <>
    <header>
      <Header />
    </header>

    <main  className="d-flex align-items-center justify-content-center vh-100">
      <Container className="pt-5 ">
          <About />
      </Container>
    </main>

  </>
);

export default App;
