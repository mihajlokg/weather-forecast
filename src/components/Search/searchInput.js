import React, { Component } from "react";
import { connect } from "react-redux";
import { searchAPI } from "./../../actions";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { BsSearch } from "react-icons/bs";
import Loader from "react-loader-spinner";


const mapDispatchToProps = dispatch => {
  return {
    searchAPI: (searchTerm, history) => dispatch(searchAPI(searchTerm, history))
  };
};

const mapStateToProps = state => ({
  loading: state.search.loading
});

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch = event => { // On 'input' enter(using form tag)
    event.preventDefault(); // Do not reload page
    const { searchTerm } = this.state; // Get input value
    this.props.searchAPI(searchTerm, this.props.history); // Call API
  };

  render() {

    const { loading } = this.props;

    return (
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <form onSubmit={this.handleSearch}>
            <InputGroup className="mb-3">
              <InputGroup.Text className="search-icon">
                <BsSearch />
              </InputGroup.Text>
              <FormControl
                name='searchTerm'
                type='text'
                placeholder='Enter the city name to get the weather forecast'
                autoComplete='off'
                aria-label="Username"
                aria-describedby="search-icon"
                onChange={this.handleInput}
              />
              <InputGroup.Text className="loader-icon">
                <div className={ loading ? '' : 'd-none'}>
                  <Loader 
                  type="Oval"
                  color="white"
                  height={16}
                  width={16}
                  />
                </div>
              </InputGroup.Text>
            </InputGroup>
          </form>
        </Col>
      </Row>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
