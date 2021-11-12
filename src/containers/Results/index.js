import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { SearchHistory } from "./../../components/Search";
import { ResultsHeader, ResultsCharts, GoToHome } from "./../../components/Results";


const mapStateToProps = state => ({
  current: state.search.data.current,
  checked: state.search.rpChecked,
});

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  handleHomeButton = () => {
    this.props.history.goBack();
  }

  render() {

    const { current, checked, history } = this.props;

    return (
      <Container className='results'>
        { // Redirect user to home if someone
          // directly access on results page
          !Boolean(current) && <Redirect to='/' />
        }

        {
          Boolean(current) && 
          <>
          <ResultsHeader />
          <ResultsCharts />
          <GoToHome browserHistory={history}/>
          <SearchHistory
            stateNode='rpChecked'
            checked={checked}
            length={3}
            />
          </>
        }
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  null,
)(Results);
