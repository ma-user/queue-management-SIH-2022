import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {NavLink,Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./midpage.css";
import { AiFillEye } from "react-icons/ai";
import busStop from '../images/busstop.jpeg';
import RegPage from './RegPage';

const Cards=(props)=> {
  // console.log(props.status);
  // console.log(typeof props.id);
  const [show, setShow] = useState(false);
  console.log(props.id); // organzation_id
  console.log(props.serviceCode); 
  // console.log(typeof props.serviceCode)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
    //  <div className="card">
    //         <img className="card-img-top" src={props.src} />
    //         <div className="card-body">
    //           <h5 className="card-title">{props.name}</h5>
    //           <p className="card-text">
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </p>
    //           <button  className="btn btn-primary">
    //             Book Appointment
    //           </button>
    //           <button  className="btn btn-primary">
    //             QR
    //           </button>
    //         </div>
    //       </div>
     <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.name}</h2>
        {/* <p className="card__description">{props.description}</p> */}
          <div className="my_wrapper">
        <span className="items">No.of token:{props.token}</span>
        <span className="items">Token Available:{props.tokenAvail}</span>
        <span className="items">Status:{props.status ? "Open":"Closed"}</span>
        <span className="items">Traffic:{props.traffic}</span>
        
    <div className='buttons'>
      <NavLink to={`/regPage/${props.id}`}><button className="card__btn btn btn-primary">Book Appointment</button>
      </NavLink>
      <Link to={`qrpage/${props.serviceCode}/${props.id}`}><button className="card__btn btn btn-warning">QR<AiFillEye/></button></Link>
      </div>
         </div>
      </div>



      
    </div>
   

  );
}

export default Cards;