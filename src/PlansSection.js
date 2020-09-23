import React from 'react';
import {
    Container,  Row, Col, Card
} from "react-bootstrap";
import CardLayout from './CardLayout'
import './App.css';
import "./cssFiles/PlansSection.css"
import CardImg from './CardImg'

import credit1 from './assets/debit.svg'
import credit2 from './assets/debit2.svg'
import credit3 from './assets/debit3.svg'


const PlansSection = () => {

    return(
      <Container fluid className="mt-5">
        <Container>
            <h1 className="text-center plans-heading">Sign Up early to save more</h1>
            <p className="text-center mt-4 plans-desc">Depending on the level of your cheking account, you will earn <br/> between 1.15% to 2.15% bonus rate</p>
        
            <Row >
                <Col >
                <CardImg imgsrc={credit1} />
                <CardLayout title="M E T A L" 
                titlevalue="2.15 %" 
                cashbackpercentage="5 %" 
                membershipfee="$11.99/m Membership Fee" 
                offer="Free for 6 months"
                point1="Charcoal Black Metal Card"
                point2="2.15%1 Bonus Rate Checking Account"
                point3="5% Cash back on brands you love"
                point4="Free Cash Withdrawals"
                btntxt="Sign Up"
                details="Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs."
                /> 
                </Col>

                <Col > 
                <CardImg imgsrc={credit2} />
                <CardLayout title="P R E M I U M" 
                titlevalue="1.65 %" 
                cashbackpercentage="4 %" 
                membershipfee="$6.99/m Membership Fee" 
                offer="Coming Soon"
                point1="Free Debit Card"
                point2="1.65%2 Bonus Rate Checking Account"
                point3="4% Cash back on brands you love"
                point4="Free Cash Withdrawals"
                btntxt="Up Next"
                details="Fund your account with a minimum opening deposit of $500. 2 additional free ATM withdrawals per month from out of network ATMs."
                /> 
                </Col>

                <Col > 
                <CardImg imgsrc={credit3} />
                <CardLayout title="B A S I C" 
                titlevalue="1.15 %" 
                cashbackpercentage="3 %" 
                membershipfee="No Membership Fee" 
                offer="Free Forever!"
                point1="Free Debit Card"
                point2="1.15%3 Bonus Rate Checking Account"
                point3="3% Cash back on brands you love"
                point4="Free Cash Withdrawals"
                btntxt="Coming Soon"
                details="Fund your account with a minimum opening deposit of $0. 20 additional free ATM withdrawals per month from out of network ATMs."
                /> 
                </Col>
            </Row>

        </Container>
      </Container>
    )

}

export default PlansSection;
