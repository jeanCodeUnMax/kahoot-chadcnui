import { Button, Col, Container, Row, Image, Card } from "react-bootstrap";

export default function QuizAnswering() {
  return (
    <Container className="">
      <Row className="justify-content-center m-5">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              Combiens Webman a t il recu de coup de Fouet ?{" "}
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col xs={2}>
          <span>Temps: </span>
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            69
          </div>
        </Col>
        <Col xs={8} className=" d-flex justify-content-center">
          <Image
            src="https://loremflickr.com/320/240/dog"
            alt="media"
            className="fluid inline-block"
          />
        </Col>
        <Col xs={2}>
          <span>réponse: </span>
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px" }}
          >
            69
          </div>
        </Col>
      </Row>

      <Row className="m-5">
        <Col xs={6}>
          <Button variant="primary" className="w-100 m-2">
            Réponse A
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="primary" className="w-100 m-2">
            Réponse B
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="primary" className="w-100 m-2">
            Réponse C
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="primary" className="w-100 m-2">
            Réponse D
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
