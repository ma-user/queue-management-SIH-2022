import React,{useState,useEffect} from 'react';

import { Link } from "react-router-dom";
import "./style.css"

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Approval(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="approval">
        <div class="sidenav">
        <Link to="/analytics">Analytics</Link>
        <Link to="/approval">Pending for Approval</Link>
        <Link to="/organization">Clients</Link>
        <Link to="/message">Contact</Link>
        <Link to="/ticket">Contact</Link>
        <Link to="/profile">Contact</Link>
      </div>
      
      <div class="main tablesize">
      <Table striped bordered hover className="tablesize">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Organisation Name</th>
          <th>Type</th>
          <th>Date of Regis.</th>
          <th>Details</th>
          <th>View Documents</th>
          <th>Verify</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>ABC Organisation</td>
          <td>Healthcare</td>
          <td>18-08-2022</td>
          <td>details</td>
          <td><button> View</button></td>
          <td><button className="btn-secondary" onClick={handleShow}>Verify</button></td>
        </tr>
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complete Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>I hereby declare that the organization is verified and all the documents are checked and authenticated cross verified and now proceeding for verification fulfillment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
    );
}
export default Approval;