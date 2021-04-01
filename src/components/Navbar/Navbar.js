import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Employee Directory</Link>
            <form style={{justifyContent:'center', textAlign: 'left', padding: '10px'}}>
                <label>
                    <input type="text" id="searchField" placeHolder="Search..." />
                </label>
            </form>
        </nav>
    )
}

export default Navbar;