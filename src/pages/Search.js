import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import Container from "../components/Container/index";
import SearchResults from "../components/SearchResults/index";

class Search extends Component {
    state = {
        search: "",
        results: [],
    }

    componentDidMount() {
        API.getEmployee()
        .then(res => this.setState({ name: res.data[0].name.first }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployee(this.state.search)
        .then(res => {
        if (res.data.status === "error") {
            throw new Error(res.data);
        }
        this.setState({ results: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err }));
      };

    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h1 className="text-center">Search for an Employee</h1>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
              <SearchResults results={this.state.results} />
            </Container>
          </div>
        );
      }
}

export default Search;