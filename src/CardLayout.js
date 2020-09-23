import React from 'react';
import {
    Container,  Row, Col, Card, Button
} from "react-bootstrap";
import ProgressBar from './ProgressBar'
import credit from './assets/credit.svg'
import './App.css';
import './cssFiles/CardLayout.css'
import { Badge } from 'reactstrap';
import { BiDollarCircle } from "react-icons/bi"

const CardLayout = ({title="METAL", 
                      titlevalue="2.25%",
                      cashbackpercentage="5%",
                      membershipfee="no fees",
                      offer="coming soon",
                      point1="abcd",
                      point2="abcd",
                      point3="abcd",
                      point4="abcd",
                      btntxt="default",
                      details="details"
                    }) => {

    return(

     <div className="cardsec">
  
        <Card className="cardmain">
        
        <div className="cardtopbody">
        
        <hr className="emptyhr" />
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
        <hr className="emptyhr"/>
       


          <Card.Title className="text-center value">{title}</Card.Title>
          
         
          <h1 className="text-center val-percent">{titlevalue}</h1>
          <p className="text-center mt-3"> <span className="badge-percent"><Badge color="secondary">{cashbackpercentage}</Badge></span> <span className="cashback">cashback</span></p>
        
          <hr className="emptyhr"/>
        <hr className="emptyhr"/>

          </div>

          <Card.Body>

          <ProgressBar />

          <Button   className="block-button btn-block" >
            {btntxt}
          </Button>

          <hr className="mt-4"/>
          <Card.Subtitle className="mb-2 mt-3 text-muted">I N C L U D E S</Card.Subtitle>
          <ul className="checked mt-3">
          <li>{point1}</li> <br/>
          <li>{point2}</li> <br/>
          <li>{point3}</li> <br/>
          <li>{point4}</li> <br/>
          </ul>

          <small className="text-muted ">{details}</small>

          </Card.Body>
        
        <Card.Footer>
          <p className="membershipfee"><BiDollarCircle size={30}/> <span>  </span> {membershipfee}</p>
          <Card.Subtitle className="mb-2 ml-3 text-muted">{offer}</Card.Subtitle>
        </Card.Footer>
      </Card>
      </div>
    )

}

export default CardLayout;
