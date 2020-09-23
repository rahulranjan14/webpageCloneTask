import React from 'react';
import {
     Container,  Row, Col, Card
} from "react-bootstrap";
import './App.css';
import { GiLindenLeaf, GiInkSwirl } from "react-icons/gi"
import './cssFiles/SectionMid.css'

const SectionMid = () => {

    return(
     
        <Container fluid>
            <Container>
                <Row>
                <Col xs={12} md={12}>
                <h4 className="text-center text-dark backedtext">BACKED BY THE BEST</h4>
                </Col>
                </Row>
                <Row className="companies">
                <Col xs={12} md={4} className="text-center mt-2 mb-2"> <h4 className="sequoia">SEQUOIA <GiLindenLeaf /></h4> </Col>
                <Col xs={12} md={4} className="text-center mt-2 mb-2"> <h4 className="polychain">Polychain <br/>  Capital </h4></Col>
                <Col xs={12} md={4} className="text-center mt-2 mb-2"> <h4 className="consensys"> <GiInkSwirl size={50} /> CONSENSYS </h4></Col>
              </Row>
            </Container>
        </Container>

    )

}

export default SectionMid;
