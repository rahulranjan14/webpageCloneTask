import React from 'react';
import {
    Container,  Row, Col, Card
} from "react-bootstrap";
import './App.css';
import number from './assets/numberr.svg'
import './cssFiles/SectionMidTwo.css'

const SectionMidTwo = () => {

    return(
      <Container fluid>
        <Container className="sectionmidtwo">
            <Row>
                <Col md={8} xs={12} sm={12}>
                    <h4 className="startsaving">Start saving for a rainy day fund</h4>
                    <h2 className="financial-goals">Use Our Checking account to Achieve Your financial goals</h2>
                    <p className="parasectwo">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col md={4} xs={12} sm={12} className="mt-2">
                <img src={number} className="numberimg " width="120%" height="" alt=""/>
                </Col>
            </Row>
        </Container>
      </Container>
    )

}

export default SectionMidTwo;
