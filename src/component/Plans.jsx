import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Modal } from "react-bootstrap";

const Plans = () => {
  return (
    <div>
      <Row>
        <Col xl={4}>
          <Card className="text-center" style={{ height: "300px" }}>
            <Card.Header>basic</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "65px" }}>$0</Card.Title>
              <Card.Text>Access to all major features</Card.Text>
              <Button
                variant="primary"
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  marginTop: "30px",
                }}
              >
                go
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="text-center" style={{ height: "300px" }}>
            <Card.Header>premium</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "65px" }}>
                {" "}
                $14<span style={{ fontSize: "35px" }}>.99/mo</span>
              </Card.Title>
              <Card.Text>Access to more features</Card.Text>
              <Button
                variant="primary"
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  marginTop: "30px",
                }}
              >
                go
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="text-center" style={{ height: "300px" }}>
            <Card.Header>pro</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: "65px" }}>
                $29<span style={{ fontSize: "35px" }}>.99/mo</span>
              </Card.Title>
              <Card.Text>Access to the most features</Card.Text>
              <Button
                variant="primary"
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  marginTop: "30px",
                }}
              >
                go
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Plans;
