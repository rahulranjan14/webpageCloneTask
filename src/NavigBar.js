import React, {useState, useEffect} from "react"
import {
    Navbar, NavbarBrand, Nav, Link, NavDropdown, Form, FormControl, Button , Container, Jumbotron
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {SiCircle} from 'react-icons/si';
import "./cssFiles/NavigBar.css"

const NavigBar = () => {


    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
      if(window.scrollY >= 60){
        setNavbar(true);
      }
      else{
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeNavbar)

    return(
        
      <Container fluid className="">
     

        <Navbar bg="white" collapseOnSelect expand="lg" id="" className={navbar ? 'fixed-top navbarscroll' : 'fixed-top'}>
        <Container>
        <SiCircle className="" size={50} style={{ fill: 'black' }} />
       <h1> <Navbar.Brand href="" className="brandname ml-2"> ONJUNO</Navbar.Brand></h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="mr-auto">
            <Nav.Link href="" className="ml-3 mr-3 text-center" >Home</Nav.Link>
            
            <NavDropdown title="Company" className="ml-3 mr-3 text-center" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Legal" className="ml-3 mr-3 text-center" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Legal" className="ml-3 mr-3 text-center" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
          
            
            <Button variant="outline-primary mr-1 ml-1 mb-1 mt-1 btn-md loginbtn">Login</Button>
            <Button variant="primary mr-1 ml-1 mb-1 mt-1 btn-md signupbtn">Signup</Button>
          
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>





    
     </Container>
    )
}

export default NavigBar;