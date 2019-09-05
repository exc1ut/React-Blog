import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';




class Header extends React.Component {
    handleClick = () => {
        var nav = document.getElementById("navy");
        var button = document.querySelector(".toggle-btn");
        button.classList.toggle("open-btn");
        nav.classList.toggle("open");
        
    }
    render(){
        return(
            <header>
      <div className="navbar">
      <div className="container">
       <div className="logo">
            <Link className="navbar-brand" to="/"><i className="fab fa-bandcamp"></i> Hope</Link>
        </div>
        <div onClick={this.handleClick} className="toggle-btn">
      <div className="one"></div>
      <div className="two"></div>
    </div>
        <div id="navy" className="">
        <ul className="nav">
          <li className="item">
            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>

          <li className="item">
            <NavLink className="nav-link" to="/about">About us</NavLink>
          </li>

          <li className="item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>

          <li className="item">
            <NavLink className="nav-link" to="/support">Support</NavLink>
          </li>
        </ul>
        </div>
        </div>
        
      </div>
    </header>
        )
    }
}
export default Header