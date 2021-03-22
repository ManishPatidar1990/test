import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
 
class Home extends Component {
  render() {
    return (
		  <div>
        <Container style={{marginTop: "300px"}}>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <a href="/exampleone"><Button>Example1</Button></a>
                </Col>
                <Col xs lg="2">
                    <a href="/exampletwo"><Button>Example2</Button></a>
                </Col>
            </Row>
        </Container>
		  </div>
    );
  }
}

export default Home;