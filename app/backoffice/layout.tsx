'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

export default function BackOfficeLayout({
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
          <h1>Quiz Master - Back Office</h1>
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
        <Col md={3} className="bg-light p-3">
          {/* Sidebar */}
          <h4>Menu</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" href="/backoffice/editor">Éditeur</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/backoffice/editor">Éditeur</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/backoffice/quiz">Mes Quiz</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/backoffice/settings">Paramètres</a>
            </li>
          </ul>
        </Col>
        <Col md={9} className="p-3">
          {/* Le contenu de tes pages s'affichera ici */}
          {children}
        </Col>
      </Row>
    </Container>
  );
}