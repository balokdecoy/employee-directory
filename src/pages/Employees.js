import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index"

class Employees extends Component {
    state = {
        name: [],
    }

    componentDidMount() {
        this.findEmployee();
      }

    findEmployee = () => {
        API.getEmployee().then(res => this.setState({
            name: res.data.results
        }
        )).catch(err => console.log(err))
    }
  
    render() {
        return (
          <div>
            <h1 className="text-center">Employee Database</h1>
            <h3 className="text-center">
              Search for an Employee
            </h3>
            <table><th>Employee Name</th><tr>
            <td>{this.state.name.map((employee)=> (
                <p>{employee.name.first} {employee.name.last}</p>
            ))}</td></tr></table>
            <Card image={this.state.name} handleBtnClick={this.handleBtnClick} />
          </div>
        );
      }
}

export default Employees;