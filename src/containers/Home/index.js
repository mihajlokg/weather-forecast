import React, { Component } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { 
  SearchInput, 
  SearchHistory // Show 9(max) elements by default
} 
  from "./../../components/Search";

const mapStateToProps = state => ({
   checked: state.search.hpChecked,
});

class Home extends Component {

  componentDidMount() {
    // Parse LOCAL STORAGE
    ///...................
  }

  render() {

    const {checked, history} = this.props;

    return (
      <Container className='search'>
        <SearchInput history={history}/>
        <SearchHistory stateNode='hpChecked' checked={checked} browserHistory={history}/>
        <NotificationContainer/>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Home);
