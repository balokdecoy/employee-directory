import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card/index";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

class Employees extends Component {
    state = {
        name: [],
        search: "",
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

    handleChange = (event) => {
        const search = event.target.value;
        this.setState({search});
    }

    handleSort = () => {
        const sorted = this.state.name.sort(function(a, b){
            if(a.name.last < b.name.last) { return -1; }
            if(a.name.last > b.name.last) { return 1; }
            return 0;})
            this.setState({
                name: sorted
            })
    }

    filteredInfo = (search, employee) => {
        if (!search) {
            return true;
        }
        else if (employee.name.first.includes(search) || employee.name.last.includes(search)) {
                return true;
            }
            else {
                return false;
            }
    }
      
    render() {
        return (
          <div>
              <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#d4d400"}}>
            <Link className="navbar-brand" to="/">Hive: An Employee Directory</Link>
            <form className = "form-inline" >
                <label>
                    <input type="text" id="searchField" placeHolder="Search..." onChange={this.handleChange}/>
                </label>
            </form>
        </nav>
          
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name<button className="btn btn-sm" style={{backgroundColor: "#d4d400", float: "right"}} onClick={this.handleSort}>Sort A-Z</button></th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City, State</th>
                        <th>Photo</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.name.filter(employee => this.filteredInfo(this.state.search, employee)).map((employee) => (
                        <tr key={employee.id.value}><td>{employee.name.first} {employee.name.last}</td>
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