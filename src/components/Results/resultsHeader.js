import React, { Component } from "react";
import { connect } from "react-redux";
import { currentDate, toFahrenheit } from "./../../helpers"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const mapStateToProps = state => ({
    current: state.search.data.current,
  });

class ResultsHeader extends Component {

  render() {

    const { current } = this.props;
    const { temp, humidity } = current.main;
    const tempC = Math.round(temp);
    const tempF = toFahrenheit(temp);
    const { speed } = current.wind;

    return (
        <Row className='header' xs={1} sm={2}>
          <Col>
              <h1>{current.name}</h1>
              <p>{currentDate()}</p>
          </Col>
          <Col>
              <p><strong>Current weather details</strong></p>
              <p>Temperature: {tempC}°C({tempF}°F)</p>
              <p>Wind: {speed}km/h</p>
              <p>Humidity: {humidity}%</p>
          </Col>
        </Row>
    );
  }
  
}

export default connect(
  mapStateToProps,
  null
)(ResultsHeader);
