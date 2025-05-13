// components/ContextMenu.jsx
import { Card } from 'react-bootstrap';

export default function ContextMenu() {
  return (
    <Card className="position-absolute" style={{ bottom: '50px', right: '50%' }}>
      <Card.Body className="text-center">
        <p>menu<br />effacer<br />activer</p>
      </Card.Body>
    </Card>
  );
}