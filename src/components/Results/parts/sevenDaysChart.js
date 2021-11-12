import React, { Component } from "react";
import { dayOfWeek } from "./../../../helpers"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

class SevenDaysChart extends Component {

  render() {

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
      return <text x={x + width / 2} y={y} fill="white" textAnchor="middle" dy={18}>{`${value}°C`}</text>;
    };

    // Generate data for chart
    const { data } = this.props;
    let chartData = [];
    
    data.daily.map( item => {
      const day = {
        day: dayOfWeek(item.dt),
        min: Math.round(item.temp.min),
        max: Math.round(item.temp.max),
      }
      chartData.push(day);
      return ('');
    });
    // Display chart
    return (
      <Row>
      <Col>
        <div style={{ height: '250px' }}>
            <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="white"/>
              <YAxis stroke="white" label={{ stroke: 'white', value: 'temp°C', angle: -90, position: 'insideLeft' }}/>
              <Tooltip  wrapperStyle={{ width: 100, backgroundColor: 'black' }}/>
              <Legend />
              <Bar
                name='Min'
                dataKey="min"
                fill="#8484dbad"
                label={renderCustomBarLabel}
              />
              <Bar
                name='Max'
                dataKey="max"
                fill="#c3aaaabf"
                label={renderCustomBarLabel}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Col>
      </Row>
    );
  } 
}

export default SevenDaysChart;