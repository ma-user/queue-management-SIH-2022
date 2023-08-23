import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Analytics(){
    return (
        <div className="analytics">
        <div class="sidenav">
        <Link to="/analytics">Analytics</Link>
        <Link to="/approval">Pending for Approval</Link>
        <Link to="/services">Clients</Link>
        <Link to="/message">Contact</Link>
        <Link to="/ticket">Contact</Link>
        <Link to="/profile">Contact</Link>
      </div>
      
      <div class="main">
      <div class="card" >
  
  <div class="card-body">
    
    <p class="card-text">Total Organizations:36</p>
    <p class="card-text">Total Traffic served:323322</p>
    <p class="card-text">Active Organizations:29</p>
   
  </div>
</div>
<div class="card" >
  
  <div class="card-body">
    <h5 class="card-title">Types of Organizations Working</h5>
    <p class="card-text">Public hospital and Health</p>
    <p class="card-text">Government Office</p>
    <p class="card-text">Municipality Corporations</p>
    
  </div>
</div>
<div class="card" >
  
  <div class="card-body">
   
    <p class="card-text">Todays Tokens</p>
    <p class="card-text">Female:1234</p>
    <p class="card-text">Male:2009</p>
    
  </div>
</div>
        
      </div>
      </div>
    );
}
export default Analytics;
