import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Employee Directory</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/employees"
                        className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}
                        >
                            Employees
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/search"
                        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;