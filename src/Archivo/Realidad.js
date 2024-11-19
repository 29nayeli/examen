import React from 'react';
import { Container, Row, Col, Card, Button, Alert, Carousel, Modal, Navbar, Nav, Form } from 'react-bootstrap';

const Realidad = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Realidad Aumentada</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
            <Nav.Link href="#testimonials">Testimonios</Nav.Link>
            <Nav.Link href="#news">Noticias</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <Row>
          {/* Inicio Section */}
          <Col id="home">
            <h2>Explora la Realidad Aumentada</h2>
            <p>Sumérgete en el mundo de la Realidad Aumentada y descubre cómo esta tecnología puede transformar tu experiencia diaria.</p>

            {/* Card Component */}
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>¿Qué es la Realidad Aumentada?</Card.Title>
                <Card.Text>
                  La Realidad Aumentada (RA) combina el mundo real con elementos digitales, creando una experiencia interactiva e inmersiva.
                </Card.Text>
                <Button variant="primary" onClick={handleModalShow}>
                  Aprende más
                </Button>
              </Card.Body>
            </Card>

            {/* Alert Component */}
            <Alert variant="info" className="mt-3">
              ¡Próximamente, nuevas experiencias de RA estarán disponibles para tu dispositivo!
            </Alert>

            {/* Carousel Component */}
            <Carousel className="mt-4">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VWBDS36RG5FRJGN7QYK6WQ6BMM.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Transforma tu entorno</h3>
                  <p>Ve cómo los objetos cobran vida a través de la pantalla.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VWBDS36RG5FRJGN7QYK6WQ6BMM.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Explora el mundo en 3D</h3>
                  <p>Interactúa con modelos tridimensionales en tiempo real.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Aprende más sobre Realidad Aumentada</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                La Realidad Aumentada se utiliza en una variedad de industrias, desde la educación hasta el entretenimiento, permitiendo una interacción más rica con el contenido digital.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>

        {/* Acerca de Section */}
        <Row id="about" className="mt-5">
          <Col>
            <h2>Acerca de la Realidad Aumentada</h2>
            <p>La Realidad Aumentada (RA) es una tecnología que permite superponer objetos virtuales al entorno físico en tiempo real. A través de dispositivos como smartphones, tabletas y gafas especiales, se puede interactuar con el entorno de manera inmersiva y enriquecedora.</p>
            <Card>
              <Card.Body>
                <Card.Title>Aplicaciones de la Realidad Aumentada</Card.Title>
                <Card.Text>
                  La RA tiene múltiples aplicaciones en sectores como la medicina, la educación, el entretenimiento, el comercio y más. Algunos ejemplos incluyen:
                  <ul>
                    <li><strong>Educación:</strong> Simulaciones y visualizaciones de conceptos complejos.</li>
                    <li><strong>Entretenimiento:</strong> Juegos interactivos como Pokémon GO.</li>
                    <li><strong>Comercio:</strong> Pruebas virtuales de productos antes de comprar.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Testimonios Section */}
        <Row id="testimonials" className="mt-5">
          <Col>
            <h2>Testimonios</h2>
            <p>Descubre lo que las personas piensan sobre la Realidad Aumentada y cómo ha mejorado su experiencia en diferentes áreas.</p>

            <Carousel>
              <Carousel.Item>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Text>
                      "La Realidad Aumentada ha transformado la forma en que aprendemos. Las simulaciones interactivas han hecho que los conceptos difíciles sean mucho más fáciles de entender."
                    </Card.Text>
                    <Card.Footer>
                      <small className="text-muted">Juan Pérez, Estudiante de Medicina</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Text>
                      "¡Jugar Pokémon GO en realidad aumentada es una experiencia única! Me permite interactuar con el entorno y los personajes de una forma mucho más divertida."
                    </Card.Text>
                    <Card.Footer>
                      <small className="text-muted">Ana Gómez, Jugadora de Videojuegos</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Text>
                      "La RA me permitió probarme ropa virtualmente antes de comprar, ¡es como tener una tienda de ropa personalizada en mi casa!"
                    </Card.Text>
                    <Card.Footer>
                      <small className="text-muted">Carlos Fernández, Comprador en línea</small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Noticias Section */}
        <Row id="news" className="mt-5">
          <Col>
            <h2>Noticias</h2>
            <p>Mantente informado sobre las últimas innovaciones y tendencias en el mundo de la Realidad Aumentada.</p>
            <Card>
              <Card.Body>
                <Card.Title>La RA en la Educación: El Futuro del Aprendizaje</Card.Title>
                <Card.Text>
                  La Realidad Aumentada está revolucionando la educación al permitir experiencias inmersivas que hacen el aprendizaje más interactivo y visual. Descubre cómo se está implementando esta tecnología en las aulas.
                </Card.Text>
                <Button variant="primary">Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contacto Section */}
        <Row id="contact" className="mt-5">
          <Col>
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta sobre la Realidad Aumentada o deseas saber más, no dudes en ponerte en contacto con nosotros.</p>

            {/* Contact Form */}
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Introduce tu nombre" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Realidad Aumentada. Todos los derechos reservados.</p>
              <p>Desarrollado por sanchez arias</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Realidad;
