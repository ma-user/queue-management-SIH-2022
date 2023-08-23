import React,{useEffect,useState} from "react";
import MidPage from "../components/MidPage";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import "../App.css";

function Home(){
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {  
        handleShow();
    }, []);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowAlert(true);
      }, 3000);
      
    }, []);
   
      
    
    return(
        <div className="midPage">
          {showAlert ?   <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Important Announcement</Alert.Heading>
          <p>
           Flat 40% off On Subscribing Today.Do Fast

          </p>  
        </Alert> : <></> }
          {/* <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras   mattis consectetur purus sit amet fermentum.
          </p>  
        </Alert>   */}

                  < MidPage/>
              <div className="modalsize">
              
              <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Government of Rajasthan:Keep Social Distancing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <img  class="modalimg" src="https://assets.weforum.org/article/image/large_NOCSZmcpyohAR1rLn7SdZ4fh_zZafwT-7Fj-CtzvbX0.jpg"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>  
      </div>           
        </div>
    );
}
export default Home;
