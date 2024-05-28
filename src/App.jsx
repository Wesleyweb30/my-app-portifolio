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

    <main>
      <Container className="mt-5 pt-5 ">
        <About />

        {/* <section>
          <h2 className="my-5">Projetos</h2>
          <ProjectCarousel />
          <Row>
            <Col md={4}>
              <ProjectCard
                title="Projeto 1"
                description="Descrição do Projeto 1"
                imgSrc="projeto1.jpg"
                link="https://github.com/seu-usuario/projeto1"
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title="Projeto 2"
                description="Descrição do Projeto 2"
                imgSrc="projeto2.jpg"
                link="https://github.com/seu-usuario/projeto2"
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title="Projeto 3"
                description="Descrição do Projeto 3"
                imgSrc="projeto2.jpg"
                link="https://github.com/seu-usuario/projeto2"
              />
            </Col>
          </Row>

        </section>

        <section>
          <ContactForm />
        </section> */}

      </Container>
    </main>

  </>
);

export default App;
