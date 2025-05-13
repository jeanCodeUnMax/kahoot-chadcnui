// app/backoffice/page.jsx
"use client";

import { Row, Col } from "react-bootstrap";
import QuizCard from "@/components/backoffice/QuizCard";

export default function BackOfficePage() {

  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Row>
        {cards.map((item) => (
          <Col key={item} md={4}>
            <QuizCard />
          </Col>
        ))}
      </Row>
    </>
  );
}
