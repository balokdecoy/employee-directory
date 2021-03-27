import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index"

class Employees extends Component {
    state = {
        name: []
    }

    componentDidMount() {
        this.findEmployee();
        this.test();
      }

      test = () => {
          API.getEmployee().then(res => console.log(res.data))
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
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City, State</th>
                        <th>Photo</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.name.map((employee) => (
                        <tr><td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.location.city}, {employee.location.state}</td>
                        <td><div><img src={employee.picture.medium}/></div></td>
                        </tr>
                    ))}         
                </tbody>
            </table>
          </div>
        );
      }
}

export default Employees;