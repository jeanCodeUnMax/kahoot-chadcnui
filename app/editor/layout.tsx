'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';


export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Container fluid className={darkMode ? 'bg-dark text-white' : ''}>
      {/* En-tête du Back Office */}
      <Row className="bg-primary text-white p-3 mb-4">
        <Col>
          <h1>Quiz Master - Editor</h1>
        </Col>
        <Col xs="auto">
          <Button
            variant={darkMode ? "light" : "dark"}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞 Mode clair" : "🌙 Mode sombre"}
          </Button>
        </Col>
      </Row>

      {/* Contenu principal avec sidebar */}
      <Row>
        
        <Col md={9} className="p-3">
          {/* Le contenu de tes pages s'affichera ici */}
          {children}
        </Col>
      </Row>
    </Container>
  );
}