import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import SevenDaysChart from "./parts/sevenDaysChart"
import SevenDaysTable from "./parts/sevenDaysTable"
import { toggleChartTable } from "./../../actions"

const mapDispatchToProps = dispatch => {
  return {
    toggle: checked => dispatch(toggleChartTable(checked))
  };
};

const mapStateToProps = state => ({
  showChart: state.results.showChart,
  sevenDays: state.search.data.sevenDays
});



class ResultsCharts extends Component {

  renderChart = decision => {
    this.props.toggle(decision);
  }

  render() {

    const { showChart, sevenDays } = this.props;

    return (
      <>
      <Row className='switch-chart-table'>
        <Col className ='text-start'>
          <p>Forecast for next 7 days</p>
        </Col>
        <Col className='text-end'>
          <ButtonGroup>
            <Button variant="secondary" onClick={() => this.renderChart(true)}>Chart</Button>
            <Button variant="secondary" onClick={() => this.renderChart(false)}>Table</Button>
          </ButtonGroup>
        </Col>
      </Row>
       {
        showChart ? (
          <SevenDaysChart data={sevenDays}/>
        )
        : (
          <SevenDaysTable data={sevenDays}/>
        )
      }
      </>
    );
  }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsCharts);
