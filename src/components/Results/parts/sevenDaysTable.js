import React, { Component } from "react";
import { dayOfWeek } from "./../../../helpers"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"

class SevenDaysTable extends Component {

    renderTable(){
        const { data } = this.props;
        return data.daily.map((item, i)  => {
            return (
                <tr key={i}>
                    <th>{ dayOfWeek(item.dt) }</th>
                    <td>{Math.round(item.temp.min)}°C</td>
                    <td>{Math.round(item.temp.day)}°C</td>
                    <td>{Math.round(item.temp.max)}°C</td>
                    <td>{Math.round(item.humidity)}%</td>
                    <td>{Math.round(item.pressure)} Mbar</td>
                    <td>{item.wind_speed} km/h</td>
                </tr>
            );
          });
    }

  render() {
    
    // Display table
    return (
      <Row>
        <Col>
            <Table bordered hover responsive='sm'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Min</th>
                        <th>Daily</th>
                        <th>Max</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                        <th>Wind</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </Table>
        </Col>
      </Row>
    );
  } 
}

export default SevenDaysTable