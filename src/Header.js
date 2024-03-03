import React from "react";
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
        <div>
    <Navbar expand="lg" style={{background:"#EE82EE",borderRadius:'20px',width:'98%',marginLeft:'1.3%',marginTop:'1.3%'}} >
      <Container>
        <Navbar.Brand href="#/home" style={{fontWeight:"500",fontSize:"26px",color:"white"}} id="nav-head">KALYAN <i class="fa-regular fa-face-grin-hearts"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto hello">
            <NavLink to='/' id="nav-text" className="t1">Home</NavLink>
            <NavLink to='/about' id="nav-text" className="t1">About</NavLink>
            <NavLink to='/projects' id="nav-text" className="t2">Projects</NavLink>
            <NavLink to='/resume' id="nav-text" className="t2">Resume</NavLink>
            <a href="https://github.com/kalyankommoju" id="nav-text" className="t1"><i class="fa-brands fa-github-alt" id="git-icon"></i></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
export default Header;