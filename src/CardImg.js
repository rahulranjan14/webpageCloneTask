import React from 'react';
import {
    Container,  Row, Col, Card, Button
} from "react-bootstrap";
import ProgressBar from './ProgressBar'
import credit1 from './assets/debit.svg'
import credit2 from './assets/debit2.svg'
import credit3 from './assets/debit3.svg'
import './App.css';
import './cssFiles/CardLayout.css'

const CardImg = ({imgsrc=credit1}) => {

    return(

     
     <img src={imgsrc} className="creditimg" alt=""/>
      
    )

}

export default CardImg;
