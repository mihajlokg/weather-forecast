import React, { Component } from "react";
import { connect } from "react-redux";
import { historyAPI } from "./../../../actions"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapDispatchToProps = dispatch => {
    return {
        historyAPI: ( searchTerm, browserHistory) => dispatch(historyAPI(searchTerm, browserHistory))
    };
};

const mapStateToProps = state => ({
  data:  state.search.history,
});

class HistoryBox extends Component {

  renderHistoryGrid = () => {
    const { data, length } = this.props;

    // If length specified
    let size = 9;
    if(typeof length !== "undefined"){
        size = length;
    }

    return data.slice(0,size).map((card, i) => (
      <Col key={i}>
        <Card 
          onClick={() => this.handleClick(card.name)}>
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.time}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))
  }

  handleClick = term => {
    this.props.historyAPI(term, this.props.browserHistory); // Call API
  }

  render() {

    const { data } = this.props;

    return (
      <div className='history'>
        <Row xs={1} sm={2} md={3} className={data.length ? 'box' : 'justify-content-center'}>
          {
            data.length ?
            this.renderHistoryGrid() :
            (
              <Col>
                There is currently no search history.
              </Col>
            )
          }
        </Row>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HistoryBox);
