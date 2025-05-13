// components/QuizGrid.jsx
import { Row, Col } from 'react-bootstrap';
import QuizCard from './backoffice/QuizCard';

export default function QuizGrid() {
  // Tableau pour 6 cartes (3x2)
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Row>
      {cards.map((item) => (
        <Col key={item} md={4} className="mb-3">
          <QuizCard />
        </Col>
      ))}
    </Row>
  );
}