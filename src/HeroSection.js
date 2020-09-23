import React from 'react';
import {
    Navbar, NavbarBrand, Nav, Link, NavDropdown, Form, FormControl, Button , Container, Jumbotron, Row, Col, Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { CardBody } from 'reactstrap';
import phone from "./assets/phonecard.svg"
import './cssFiles/HeroSection.css'
import {FiMail} from 'react-icons/fi';
import {FaFlagUsa, FaGooglePlay} from 'react-icons/fa';
import {GrAppleAppStore} from 'react-icons/gr';

const HeroSection = () => {

    return(
        
        <Container fluid className="mt-5">
            <Container>
                <Row>

                <Col xs={12} md={6}>
                    <h1 className=" text-center heroheading">The Most Powerful Checking Account</h1>
                    <br/>
                    <p className="heroslogan">Our Checking account gives you higher returns than savings account with no hidden fees.</p>

                    <Card body className="herocard">
                    
                    
                    <div>
                    <FiMail size={45} style={{ color: "blue"}} />
                    <input type="email" placeholder="Enter Email Address" className="inputemail ml-2" />
                    <Button className="submit cardbtn float-right">Join Now</Button>
                    </div>
                    </Card>

                    
                    <p className="mt-3 spotsleft"><FaFlagUsa  size={30} style={{ fill: '#10A881' }} />  100 spots left for Priority Access</p>

                    <Container className="mt-5">
                    <p className="downloadapp ml-1">Download our App</p>
                    <Row >
                    <Button  className="ml-3 mb-2 playstore"><FaGooglePlay  size={20} /> Playstore</Button>
                    <Button  className="ml-3 mb-2 appstore"> <GrAppleAppStore size={20}/> Appstore</Button>
                    </Row>
                    </Container>
                </Col>




                <Col xs={12} md={6}>
                <img src={phone} className="phoneimg mt-3 mr-5" width="110%" height="110%" alt=""/>
                </Col>
                </Row>
            </Container>
        </Container>

    )

}

export default HeroSection;
