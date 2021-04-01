import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route basename={process.env.PUBLIC_URL} exact path="/" component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
