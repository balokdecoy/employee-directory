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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Photo</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{this.state.name.map((employee)=> (
                            <p>{employee.name.first} {employee.name.last}</p>
                            ))}
                        </td>
                        <td>{this.state.name.map((employee) => (
                            <p>{employee.email}</p>
                        ))}</td>
                         <td>{this.state.name.map((employee) => (
                            <p>{employee.phone}</p>
                        ))}</td>
                          <td>{this.state.name.map((employee) => (
                            <p>{employee.city}</p>
                        ))}</td>
                          <td>{this.state.name.map((employee) => (
                            <p>{employee.state}</p>
                        ))}</td>
                        {/* <td>{this.state.name.map((employee) => (
                            <img src={employee.picture.thumbnail}/>
                        ))}</td> */}
                    </tr>
                </tbody>
            </table>
          </div>
        );
      }
}

export default Employees;