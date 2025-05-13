import { Container, Row, Table } from "react-bootstrap";

export default function RankingPlayer() {
  return (
    <Container>
      <Row className="text-center m-5">
        <h1>Tableau des Scores</h1>
      </Row>
      <Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Pseudo</th>
              <th>point gagner</th>
              <th>point total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Webman</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
