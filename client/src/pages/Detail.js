import {React,useState} from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { BsCheckCircle,BsShareFill } from "react-icons/bs";
function Detail(){
    return(
        <div className='detail'>
                  <h1>Organization Name:ORG-AGN-09-234</h1> <BsShareFill className='left'/>
                  
                  <div className='dwrapper'>     
                  <div>
                   <img  className="pos" src='https://media.istockphoto.com/vectors/code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-vector-id1095468748?k=20&m=1095468748&s=612x612&w=0&h=QkNgbB839T27QTYllcNKGtTDQj8pgEQ5rjKs62HFXs4='/>
                 
                  </div>
                  <div class="card" >
  
                 <div class="card-body">
           <h4 class="card-title mb-5">Counter<span className='green'>02</span></h4>
        <p class="card-text">Current Serving Token:<span className='purple'>18</span></p>
        <p class="card-text">Your turn is after 4 token(s)</p>
        <p class="card-text">Estd.time 38 minutes</p>
   
                      </div>
                      </div>
                  {/* <div className='info'>
                    <div className='circle'></div>
                    <div className='cwrapper'>
                    <h2>Counter</h2><span className='green'>02</span>
                    </div>
                    <div className='cwrapper'>
                    <p>Current Serving Token:</p><span className='purple'>18</span></div>

                    <p className='cwrapper'>Your turn is after 4 token(s)</p>
                    <p className='cwrapper b'>Estd.time 38 minutes</p>
                    
                  </div> */}
                  </div>
                  <div className='border'>     
                  
                  {/* <div class="card" >
  
                 <div class="card-body color">
           <h5 class="card-title">Token Id:02</h5>
        <p class="card-text">
                    <p>Name: Kashif Raza</p>
                    <p>Age:21 years</p>
                    
                    </p>
        <p class="card-text"><div className="cwrapper">
                    <p>Gender:Male</p>
                    <p>Date:9 Aug 2022</p>
                    
                    </div></p>
        <p class="card-text">Estd.time 38 minutes</p>
   
                      </div>
                      </div> */}
                    <div className="cwrapper ">
                    <p>Token Id:02</p>
                    </div>
                    <div className="cwrapper">
                    <p>Name: Kashif Raza</p>
                    <p>Age:21 years</p>
                    
                    </div>
                    <div className="cwrapper">
                    <p>Gender:Male</p>
                    <p>Date:9 Aug 2022</p>
                    
                    </div>


                   
                    <p className="cwrapper">Additional members:04</p>
                    
                    <ul class="size">
                      <li >
                        Chirag Rawat 22 Male
                      </li>
                      <li >
                        Sakshi Magre 21 Female
                      </li>
                      <li >
                        Milisha Gupta 21 Female
                      </li>
                    </ul>
                    {/* <BsCheckCircle className='icon'/>*/}
                    <a href ="https://rzp.io/l/AayLcx2uf">
                    <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
   
    Authenticated and Verified  .Not a case of Emergency
    
  </div> 
  </a>  
                  
                  </div>
  
<div className='center'>
<a href="https://rzp.io/l/AayLcx2uf"><button className="btn btn-secondary">Request for Reschedule</button></a>
                    <button className="btn btn-danger mr-5">Cancel for Appointment</button>
</div>

            </div>
    );
}
export default Detail;