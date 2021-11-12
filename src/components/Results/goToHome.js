import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class GoToHome extends Component {

  handleHomeButton = () => {
    this.props.browserHistory.goBack();
  }

  render() {

    return (
        <Row>
            <Col className='text-center' md={{ span: 4, offset: 4 }} sm>
                <Button variant="primary" size="lg" onClick={this.handleHomeButton}>
                Go to home page
                </Button>
            </Col>
        </Row>
    );
  }
}

export default GoToHome;
