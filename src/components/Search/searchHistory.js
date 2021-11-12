import React, { Component } from "react";
import { connect } from "react-redux";
import Switch from "react-switch";
import HistoryBox from "./parts/HistoryBox";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toggle } from "./../../actions";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const mapDispatchToProps = dispatch => {
  return {
    toggle: (checked, stateNode) => dispatch(toggle(checked, stateNode))
  };
};

class SearchHistory extends Component {

  handleChange = (checked) => {
    this.props.toggle(checked, this.props.stateNode);
  }

  render() {

    let {
      checked,
      browserHistory,
      length,
    } = this.props;

    // Tooltip for switch
    const renderTooltip = (props) => (
      <Tooltip {...props}>
        Toggle history box
      </Tooltip>
    );

    return (
      <>
      <Row className='switch'>
        <Col>
          <OverlayTrigger
            placement="right-end"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <span>
              <Switch 
              onChange={this.handleChange} 
              checked={checked}
              borderRadius={2}
              onColor='#c8c8c8'
              activeBoxShadow='0 0 2px 3px #c8c8c8'
              uncheckedIcon={false}
              checkedIcon={false} />
            </span>
          </OverlayTrigger>
        </Col>
      </Row>
      {
        checked ? (
          <HistoryBox browserHistory={browserHistory} length={length}/>
        )
        : ""
      }
    </>);
  }
  
}

export default connect(
  null,
  mapDispatchToProps
)(SearchHistory);
