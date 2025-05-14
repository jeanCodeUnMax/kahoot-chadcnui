// components/QuizCard.jsx
import { User } from "@/models";
import { Card } from "react-bootstrap";

export default function QuizCard() {

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src="https://loremflickr.com/320/240/cat" alt="Le game" />
      <Card.Title>Le quizz du diable</Card.Title>
      <Card.Body className="text-center">
        <Card.Text>Ce quiz peut etre mortel</Card.Text>
        <Card.Link href="#">Editer</Card.Link>
        <Card.Link href="#">Jouer</Card.Link>
      </Card.Body>
    </Card>
  );
}
